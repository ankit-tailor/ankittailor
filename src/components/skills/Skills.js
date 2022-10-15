import React from "react"
import {
  faCss3Alt,
  faHtml5,
  faJs,
  faNodeJs,
  faNpm,
  faReact,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Skills = () => {
  return (
    <div className="text-dark dark:text-white bg-white dark:bg-dark">
      <div className="sm:container sm:mx-auto">
        <div className="center py-10 sm:py-20">
          <h1 className="text-center font-bold text-2xl">Skills</h1>
          <div className="text-center md:justify-center md:content-center my-10">
            <FontAwesomeIcon
              className="text-6xl transform-scale sm:text-6xl md:text-8xl mx-8 cursor-pointer sm:mx-10 my-8 font-medium"
              icon={faHtml5}
            />
            <FontAwesomeIcon
              className="text-6xl transform-scale sm:text-6xl md:text-8xl mx-8 cursor-pointer sm:mx-10 my-8 font-medium"
              icon={faCss3Alt}
            />
            <FontAwesomeIcon
              className="text-6xl transform-scale sm:text-6xl md:text-8xl mx-8 cursor-pointer sm:mx-10 my-8 font-medium"
              icon={faJs}
            />
            <FontAwesomeIcon
              className="text-6xl transform-scale sm:text-6xl md:text-8xl mx-8 cursor-pointer sm:mx-10 my-8 font-medium"
              icon={faReact}
            />
            <FontAwesomeIcon
              className="text-6xl transform-scale sm:text-6xl md:text-8xl mx-8 cursor-pointer sm:mx-10 my-8 font-medium"
              icon={faNpm}
            />
            <FontAwesomeIcon
              className="text-6xl transform-scale sm:text-6xl md:text-8xl mx-8 cursor-pointer sm:mx-10 my-8 font-medium"
              icon={faNodeJs}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
