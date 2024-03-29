import React from "react"
import Typography from "@material-ui/core/Typography"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { SOCIAL_LINKS } from "../../lib/contants"

const About = () => {
  const profileImage = useStaticQuery(graphql`
    query ImageQuery {
      file(relativePath: { eq: "profile.jpeg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="dark:bg-dark bg-white text-dark dark:text-white">
      <div className="px-4 lg:px-0 sm:container py-4 sm:mx-auto">
        <div className="py-2 sm:py-2">
          <h1 className="text-2xl sm:text-3xl my-3 font-bold">
            <span className="text-indigo">
              {" "}
              Hello There !!{" "}
              <span role="img" aria-label="wave">
                {" "}
                👋{" "}
              </span>
            </span>
          </h1>
          <br />
          <div className="lg:flex justify-between">
            <Img
              fluid={profileImage.file.childImageSharp.fluid}
              alt="profile_photo"
              className="cursor-pointer transform-scale shadow-2xl block mx-auto rounded-lg w-3/4 sm:w-2/4 h-3/4 sm:h-2/4 lg:w-1/4 lg:h-3/4 lg:mx-6 my-6"
            />
            <div>
              <p className="text-xl">
                I'm Ankit Tailor,
                <span className="font-bold text-indigo">
                  {" "}
                  Software Engineer{" "}
                </span>
                from{" "}
                <span className="font-bold text-indigo"> Gujarat, India. </span>
                Currently, I'm contributing to{" "}
                <span className="font-bold text-indigo">
                  <a
                    href="https://github.com/GeekyAnts/NativeBase"
                    target="_blank"
                    without
                    rel="noreferrer"
                  >
                    NativeBase
                  </a>
                </span>{" "}
                @
                <span className="font-bold text-indigo">
                  <a
                    href="https://GeekyAnts.com"
                    target="_blank"
                    without
                    rel="noreferrer"
                  >
                    GeekyAnts
                  </a>
                </span>
                .
              </p>
              <br />
              <p className="text-xl">
                I'm self-taught developer with degree in{" "}
                <span className="font-bold text-indigo">
                  Computer Engineering.{" "}
                </span>{" "}
                I've worked with Javascript and related frameworks & libraries,
                mainly{" "}
                <span className="font-bold text-indigo">
                  {" "}
                  React / React-Native{" "}
                </span>
                .
              </p>
              <br />
              <Typography
                className="text-active"
                gutterBottom
                variant="h5"
                component="h2"
              >
                • • •
              </Typography>
              <br />
              <p className="text-xl">
                Currently I work with{" "}
                <span className="font-bold text-indigo"> ReactJS </span> and{" "}
                <span className="font-bold text-indigo"> React-Native. </span>
              </p>
              <p className="text-xl">
                <span role="img" aria-label="search">
                  🔎
                </span>{" "}
                I've experience with:
              </p>
              <ul className="text-lg">
                <li>
                  <p>
                    <span role="img" aria-label="point">
                      {" "}
                      👉
                    </span>{" "}
                    <span className="font-bold text-indigo"> C / C++ </span>
                    (Early engineering)
                  </p>
                </li>
                <li>
                  <p>
                    <span role="img" aria-label="point">
                      {" "}
                      👉
                    </span>{" "}
                    <span className="font-bold text-indigo"> Java </span>
                  </p>
                </li>
                <li>
                  <p>
                    <span role="img" aria-label="point">
                      {" "}
                      👉
                    </span>{" "}
                    Frontend:{" "}
                    <span className="font-bold text-indigo">
                      {" "}
                      ReactJS, ReactNative, Bootstarp, Tailwind{" "}
                    </span>
                  </p>
                </li>
                <li>
                  <p>
                    <span role="img" aria-label="point">
                      {" "}
                      👉
                    </span>{" "}
                    Backend:{" "}
                    <span className="font-bold text-indigo">
                      {" "}
                      NodeJS, MongoDB
                    </span>
                  </p>
                </li>
              </ul>
              <br />
              <Typography
                className="text-active"
                gutterBottom
                variant="h5"
                component="h2"
              >
                • • •
              </Typography>
              <br />
              <p className="text-xl">
                I believe in the process of: Learn, Apply & Share.
              </p>
              <ul className="text-lg">
                <li>
                  <p>
                    <span role="img" aria-label="blog">
                      {" "}
                      ✍
                    </span>{" "}
                    Blog:{" "}
                    <a
                      href={SOCIAL_LINKS.HASHNODE}
                      target="_blank"
                      without
                      rel="noreferrer"
                    >
                      {" "}
                      <span className="font-bold text-indigo"> Hashnode </span>
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <span role="img" aria-label="work">
                      👨‍🌾
                    </span>{" "}
                    Open Source projects & contributions:
                    <a
                      href={SOCIAL_LINKS.GITHUB}
                      target="_blank"
                      without
                      rel="noreferrer"
                    >
                      {" "}
                      <span className="font-bold text-indigo"> GitHub </span>
                    </a>
                  </p>
                </li>
                <li>
                  <p>
                    <span role="img" aria-label="work">
                      🔎
                    </span>{" "}
                    Answers and reviews:
                    <a
                      href={SOCIAL_LINKS.STACKOVERFLOW}
                      target="_blank"
                      without
                      rel="noreferrer"
                    >
                      {" "}
                      <span className="font-bold text-indigo">
                        {" "}
                        Stackoverflow{" "}
                      </span>
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
