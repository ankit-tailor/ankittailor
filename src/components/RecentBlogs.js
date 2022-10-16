import { Link } from "gatsby"
import React from "react"
import Blog from "./blog/Blog"

function RecentBlogs({ allBlogs }) {
  return (
    <div className="text-dark dark:text-white bg-white dark:bg-dark">
      <div className="sm:container sm:mx-auto">
        <div className="p-2">
          <h1 className="text-center font-bold my-10 text-2xl">Recent Blogs</h1>
          <div className="gap-3 grid place-items-center lg:grid-cols-2 md:grid-cols-1">
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
          <Link to="/blogs">
            <button className="block transform-scale shadow-2xl w-6/12 lg:w-4/12 bg-indigo text-white py-2 mx-auto my-10 rounded px-4">
              See More
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RecentBlogs
