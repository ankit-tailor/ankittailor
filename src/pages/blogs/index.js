import React from "react"
import Layout from "../../components/layout/Layout"
import { graphql, Link } from "gatsby"
import SEO from "../../components/SEO/seo"
import Blog from "../../components/blog/Blog"

function Blogs({ data }) {
  const allBlogs = data.blogs.edges

  return (
    <Layout>
      <div className="dark:bg-dark bg-white text-dark dark:text-white">
        <div className="sm:container py-4 sm:mx-auto">
          <div className="py-2 px-5 sm:px-20 sm:py-2">
            <SEO siteTitle="Blogs" />
            <h1 className="text-2xl sm:text-3xl my-3 font-bold text-indigo">
              Blogs
            </h1>
            {allBlogs.map(
              ({
                node: {
                  childMarkdownRemark: {
                    frontmatter: { title, description, date, link, thumbnail },
                  },
                },
                id,
              }) => (
                <Blog
                  key={id}
                  title={title}
                  description={description}
                  fluid={thumbnail.childImageSharp.fluid}
                  date={date}
                  link={link}
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
              link
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
