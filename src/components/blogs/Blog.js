import React from 'react'
import Typography from '@material-ui/core/Typography';
import Img from "gatsby-image"

const Blog = ({ title, description, fluid, date, link }) => {
    return (
        <div className="p-6 rounded-lg shadow-2xl my-2 cursor-pointer bg-white text-dark dark:bg-dark dark:text-white w-full">
            <a href={link} target="_blank" rel="noopener">
                <div className="flex">
                    <Img className="w-4/12 max-h-30 transform-scale shadow-2xl mx-2" fluid={fluid} alt={title} />
                    <div className="flex flex-col justify-evenly">
                        <div>
                            <Typography gutterBottom variant="h5" component="h2">
                                {title.length > 30 ? `${title.substring(0, 30)}...` : `${title}`}
                            </Typography>
                            <Typography variant="body2" component="p">
                                {`${description?.substring(0, 150)}...`}
                            </Typography>
                        </div>
                        <Typography variant="body2" className="text-active" component="p">
                            {date}
                        </Typography>
                    </div>
                </div>
                <hr className="w-full mx-auto my-2" />
            </a>
        </div>
    )
}

export default Blog
