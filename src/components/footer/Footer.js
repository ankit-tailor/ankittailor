import { Link } from "gatsby"
import React from "react"
import {
  faTwitter,
  faLinkedinIn,
  faInstagram,
  faGithub,
  faNode,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { PROJECT_LINK, PROJECT_REPO, SOCIAL_LINKS } from "../../lib/contants"

const Footer = () => {
  return (
    <>
      <footer className="px-6 py-6 bg-white dark:bg-dark text-dark dark:text-white">
        {/* <div className="rounded-lg bg-blue py-10 px-6 text-white"> */}
        <hr className="text-dark dark:text-white bg-white dark:bg-dark mx-1 my-3" />
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="my-4">
            About
            <Link className="text-indigo underline mx-1" to="/">
              {PROJECT_LINK}
            </Link>
            is the space where I share all my content related to software
            development. I am always open for interesting questions &
            collaborations & also you can share some memes on instagram.
            <span role="img" aria-label="wave">
              {" "}
              😃{" "}
            </span>
          </div>
          <div className="flex justify-evenly">
            <div>
              <h1 className="text-dark dark:text-white font-bold">
                Quick Links
              </h1>
              <Link
                to="/"
                className="my-1 block leading-2 underline text-dark dark:text-white rounded-md text-sm"
              >
                Home
              </Link>
              <Link
                to="/projects"
                className="my-1 block leading-2 underline text-dark dark:text-white rounded-md text-sm"
              >
                Projects
              </Link>
              <Link
                to="/blogs"
                className="my-1 block leading-2 underline text-dark dark:text-white rounded-md text-sm"
              >
                Blogs
              </Link>
              <Link
                to="/about"
                className="my-1 block leading-2 underline text-dark dark:text-white rounded-md text-sm"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="my-1 block leading-2 underline text-dark dark:text-white rounded-md text-sm"
              >
                Contact
              </Link>
            </div>
            <hr className="bg-dark my-6" />
            <div>
              <h1 className="my-2 text-dark dark:text-white font-bold">
                Social Links
              </h1>
              {/* <div className="grid grid-cols-3 gap-3"> */}
              <ul>
                <li>
                  <a
                    href={SOCIAL_LINKS.STACKOVERFLOW}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <FontAwesomeIcon
                      className="text-xl hover:text-indigo cursor-pointer mx-2 my-2 font-medium"
                      icon={faStackOverflow}
                    />{" "}
                  </a>
                  <a
                    href={SOCIAL_LINKS.TWITTER}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <FontAwesomeIcon
                      className="text-xl hover:text-indigo cursor-pointer mx-2 my-2 font-medium"
                      icon={faTwitter}
                    />
                  </a>
                  <a
                    href={SOCIAL_LINKS.HASHNODE}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <FontAwesomeIcon
                      className="text-xl hover:text-2xl hover:text-indigo cursor-pointer mx-2 my-2 font-medium"
                      icon={faNode}
                    />
                  </a>
                </li>
              </ul>
              <ul>
                <li>
                  <a
                    href={SOCIAL_LINKS.GITHUB}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <FontAwesomeIcon
                      className="text-xl hover:text-indigo cursor-pointer mx-2 my-2 font-medium"
                      icon={faGithub}
                    />
                  </a>
                  <a
                    href={SOCIAL_LINKS.INSTAGRAM}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <FontAwesomeIcon
                      className="text-xl hover:text-indigo cursor-pointer mx-2 my-2 font-medium"
                      icon={faInstagram}
                    />
                  </a>
                  <a
                    href={SOCIAL_LINKS.LINKEDIN}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    <FontAwesomeIcon
                      className="text-xl hover:text-indigo cursor-pointer transform-scale mx-2 my-2 font-medium"
                      icon={faLinkedinIn}
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="bg-white dark:bg-dark mx-1 my-3" />
        <div className="grid grid-cols-1 md:grid-cols-2 text-center">
          <p className="mx-3 my-3">
            Copyright &copy; {new Date().getFullYear()}{" "}
            <Link to="/">
              {" "}
              <span className="text-indigo"> Ankit Tailor</span>
            </Link>
          </p>
          <p className="mx-3 my-3">
            Built with{" "}
            <span className="cursor-pointer" role="img" aria-label="heart">
              {" "}
              ❤️
            </span>{" "}
            & Open sourced on{" "}
            <a href={PROJECT_REPO} target="_blank" rel="noreferrer">
              {" "}
              <FontAwesomeIcon
                className="hover:text-indigo"
                icon={faGithub}
              />{" "}
            </a>
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer
