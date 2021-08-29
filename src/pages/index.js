import { graphql } from "gatsby"
import React from "react"
import Blog from "../components/blogs/Blog"
import Intro from "../components/intro/Intro"
import Layout from "../components/layout/Layout"
import Project from "../components/projects/Project"
import Skills from "../components/skills/Skills"

const Home = ({ data }) => {

  const allProjects = data.projects.nodes;
  // console.log(allProjects, data)

  return (
    <Layout>
      <Intro />
      <Skills />
      <div className="text-dark dark:text-white bg-white dark:bg-dark">
        <div className="sm:container sm:mx-auto">
          <div className="p-6">
            <h1 className="text-center font-bold text-2xl">Recent Projects</h1>
            <div className="gap-5 my-6 grid place-items-center lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
              {allProjects.map(({ frontmatter: { name, techstack, github, liveProject, thumbnail }, id }) => (
                <Project
                  key={id}
                  name={name}
                  liveProject={liveProject}
                  techstack={techstack}
                  github={github}
                  fluid={thumbnail.childImageSharp.fluid}
                />
              ))}
            </div>
            <button className="block transform-scale shadow-2xl w-6/12 lg:w-4/12 bg-indigo text-white py-2 mx-auto my-10 rounded px-4">
              See More
            </button>
          </div>
        </div>
      </div>
      <div className="text-dark dark:text-white bg-white dark:bg-dark">
        <div className="sm:container sm:mx-auto">
          <div className="p-2">
            <h1 className="text-center font-bold my-10 text-2xl">Recent Blogs</h1>
            <div className="gap-3 grid place-items-center lg:grid-cols-2 md:grid-cols-1">
              <Blog />
              <Blog />
              <Blog />
              <Blog />
            </div>
            <button className="block transform-scale shadow-2xl w-6/12 lg:w-4/12 bg-indigo text-white py-2 mx-auto my-10 rounded px-4">
              See More
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home

export const query = graphql`
query ProjectQuery {
  projects: allMarkdownRemark {
    nodes {
      frontmatter {
        github
        liveProject
        name
        slug
        techstack
        title
        thumbnail {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      id
    }
  }
}

`