import React from "react"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"
import Img from "gatsby-image"

function Project({ name, github, liveProject, techstack, fluid }) {
  return (
    <Card className="py-8 shadow-2xl bg-white cursor-pointer dark:bg-dark text-dark dark:text-white md:w-full w-full">
      {/* <CardMedia
                className="h-48 transform-scale ease-in"
                component="img"
                alt="Contemplative Reptile"
                height="50"
                image="https://images.pexels.com/photos/4533077/pexels-photo-4533077.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                title="Contemplative Reptile"
            /> */}
      <Img
        fluid={fluid}
        className="h-48 transform-scale ease-in"
        atl="banner image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {name}
        </Typography>
        <Typography variant="body2" component="p">
          {techstack}
        </Typography>
      </CardContent>
      <CardActions>
        <button
          size="small"
          className="transform-scale"
          style={{ color: "rgba(0, 195, 255)", fontSize: "0.9rem" }}
        >
          <a href={liveProject} target="_blank" rel="noreferrer">
            {" "}
            Live Project{" "}
          </a>
        </button>
        <button
          size="small"
          className="transform-scale"
          style={{ color: "rgba(0, 195, 255)", fontSize: "0.9rem" }}
        >
          <a href={github} target="_blank" rel="noreferrer">
            {" "}
            Source Code
          </a>
        </button>
      </CardActions>
    </Card>
  )
}

export default Project
