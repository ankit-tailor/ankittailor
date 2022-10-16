import React from "react"
import Project from "./project/Project"

function RecentProjects({ allProjects }) {
  return (
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
          {/* <Link to="/projects">
          <button className="block transform-scale shadow-2xl w-6/12 lg:w-4/12 bg-indigo text-white py-2 mx-auto my-10 rounded px-4">
            See More
          </button>
        </Link> */}
        </div>
      </div>
    </div>
  )
}

export default RecentProjects
