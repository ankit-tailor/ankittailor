import React from "react"
import Layout from "../../components/layout/Layout"
import { graphql, Link } from "gatsby"
import SEO from "../../components/SEO/seo"
import BlogList from "../../components/blog/BlogList"

function Blogs({ data }) {
  const allBlogs = data.blogs.edges

  return (
    <Layout>
      <SEO siteTitle="Blogs" />
      <div className="dark:bg-dark bg-white text-dark dark:text-white">
        <div className="px-4 lg:px-0 lg:container py-4 lg:mx-auto">
          <div className="py-2 sm:py-2">
            <h1 className="text-4xl sm:text-4xl my-3 font-bold">
              <span className="text-indigo">
                Blogs{" "}
                <span role="img" aria-label="wave">
                  📚
                </span>
              </span>
            </h1>
            {allBlogs.map(
              ({
                node: {
                  childMarkdownRemark: {
                    frontmatter: { title, description, date, slug, thumbnail },
                  },
                },
                id,
              }) => (
                <BlogList
                  key={id}
                  title={title}
                  description={description}
                  fluid={thumbnail.childImageSharp.fluid}
                  date={date}
                  slug={slug}
                />
              )
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Blogs

export const query = graphql`
  query BlogQuery {
    blogs: allFile(
      filter: {
        internal: { mediaType: { eq: "text/markdown" } }
        sourceInstanceName: { eq: "blogs" }
      }
    ) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              title
              description
              slug
              date
              thumbnail {
                childImageSharp {
                  fluid {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
