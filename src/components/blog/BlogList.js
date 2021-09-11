import React from "react"
import Typography from "@material-ui/core/Typography"
import Img from "gatsby-image"

const BlogList = ({ title, description, fluid, date, link }) => {
    return (
        <div className="p-6 my-2 cursor-pointer bg-white text-dark dark:bg-dark dark:text-white hover:text-indigo w-full">
            <a href={link} target="_blank" rel="noreferrer">
                <div className="flex flex-col-reverse md:flex-row">
                    <div className="flex hover:text-indigo flex-col justify-evenly">
                        <div>
                            <h1 className="font-extrabold my-4 text-4xl">
                                {title}
                            </h1>
                            <Typography variant="body2" className="my-4 text-active" component="p">
                                {description}
                            </Typography>
                        </div>
                        <Typography variant="body2" className="my-4 text-active" component="p">
                            <span role="img" aria-label="wave">
                                ⏱
                            </span>
                            {date}
                        </Typography>
                    </div>
                    <Img
                        className="w-full my-4 lg:mx-4 h-80 lg:h-64 block rounded-lg transform-scale shadow-2xl mx-auto"
                        fluid={fluid}
                        alt={title}
                    />
                </div>
            </a>
        </div>
    )
}

export default BlogList
