import { graphql, Link } from "gatsby"
import React from "react"
import Blog from "../components/blog/Blog"
import Intro from "../components/intro/Intro"
import Layout from "../components/layout/Layout"
import Project from "../components/project/Project"
import Skills from "../components/skills/Skills"

const Home = ({ data }) => {
  const allProjects = data.projects.edges
  const allBlogs = data.blogs.edges

  return (
    <Layout>
      <Intro />
      <Skills />
      <div className="text-dark dark:text-white bg-white dark:bg-dark">
        <div className="sm:container sm:mx-auto">
          <div className="p-6">
            <h1 className="text-center font-bold text-2xl">Recent Projects</h1>
            <div className="gap-5 my-6 grid place-items-center lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
              {allProjects.map(
                ({
                  node: {
                    childMarkdownRemark: {
                      frontmatter: {
                        name,
                        techstack,
                        github,
                        liveProject,
                        thumbnail,
                      },
                    },
                  },
                  id,
                }) => (
                  <Project
                    key={id}
                    name={name}
                    liveProject={liveProject}
                    techstack={techstack}
                    github={github}
                    fluid={thumbnail.childImageSharp.fluid}
                  />
                )
              )}
            </div>
            <Link to="/projects">
              <button className="block transform-scale shadow-2xl w-6/12 lg:w-4/12 bg-indigo text-white py-2 mx-auto my-10 rounded px-4">
                See More
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="text-dark dark:text-white bg-white dark:bg-dark">
        <div className="sm:container sm:mx-auto">
          <div className="p-2">
            <h1 className="text-center font-bold my-10 text-2xl">
              Recent Blogs
            </h1>
            <div className="gap-3 grid place-items-center lg:grid-cols-2 md:grid-cols-1">
              {allBlogs.map(
                ({
                  node: {
                    childMarkdownRemark: {
                      frontmatter: {
                        title,
                        description,
                        date,
                        link,
                        thumbnail,
                      },
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
            <Link to="/blogs">
              <button className="block transform-scale shadow-2xl w-6/12 lg:w-4/12 bg-indigo text-white py-2 mx-auto my-10 rounded px-4">
                See More
              </button>
            </Link>
          </div>
        </div>
      </div>
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
