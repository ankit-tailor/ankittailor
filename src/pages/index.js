import loadable from "@loadable/component"
import { graphql, Link } from "gatsby"
import React from "react"

const RecentBlogs = loadable(() => import("../components/RecentBlogs"))
const RecentProjects = loadable(() => import("../components/RecentProjects"))
const Intro = loadable(() => import("../components/intro/Intro"))
const Layout = loadable(() => import("../components/layout/Layout"))
const SEO = loadable(() => import("../components/SEO/seo"))
const Skills = loadable(() => import("../components/skills/Skills"))

const Home = ({ data }) => {
  const allProjects = data.projects.edges
  const allBlogs = data.blogs.edges

  return (
    <Layout>
      <SEO siteTitle="Frontend Developer" />
      <Intro />
      <Skills />
      <RecentProjects allProjects={allProjects} />
      <RecentBlogs allBlogs={allBlogs} />
    </Layout>
  )
}

export default Home

export const query = graphql`
  query MyQuery {
    projects: allFile(
      filter: {
        internal: { mediaType: { eq: "text/markdown" } }
        sourceInstanceName: { eq: "projects" }
      }
    ) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              name
              techstack
              liveProject
              github
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
