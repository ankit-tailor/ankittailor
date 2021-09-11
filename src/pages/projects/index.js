import { graphql } from "gatsby"
import React from "react"
import Layout from "../../components/layout/Layout"
import ProjectList from "../../components/project/ProjectList"
import SEO from "../../components/SEO/seo"


function Projects({ data }) {
  const allProjects = data.projects.edges

  return (
    <Layout>
      <SEO siteTitle="Projects" />
      <div className="dark:bg-dark bg-white text-dark dark:text-white">
        <div className="lg:container py-4 lg:mx-auto">
          <div className="py-2 lg:px-5 lg:px-20 sm:py-2">
            <SEO siteTitle="Blogs" />
            <h1 className="text-4xl sm:text-3xl mx-8 my-3 font-bold">
              <span className="text-indigo underline">
                Projects
                <span role="img" aria-label="wave">
                  🚀
                </span>
              </span>
            </h1>
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
                <ProjectList
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
        </div>
      </div>
    </Layout>
  )
}

export default Projects

export const query = graphql`
  query ProjectQuery {
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
  }
`