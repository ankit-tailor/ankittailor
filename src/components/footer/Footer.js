import { Link } from "gatsby"
import React from "react"
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
  faGithub,
  faNode,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = () => {
  return (
    <>
      <footer className="px-6 py-6 bg-white dark:bg-dark text-dark dark:text-white">
        {/* <div className="rounded-lg bg-blue py-10 px-6 text-white"> */}
        <hr className="text-dark dark:text-white bg-white dark:bg-dark mx-1 my-3" />
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="my-4">
            ABOUT{" "}
            <Link className="text-indigo underline mx-1" to="/">
              {" "}
              ankittailor.me{" "}
            </Link>{" "}
            is the space where I share all my content related to software
            development. I am always open for interesting questions &
            collaborations & also you can share some memes on instagram. 😃
          </div>
          <div className="flex justify-evenly">
            <div>
              <h1 className="text-dark dark:text-white font-bold">
                Quick Links
              </h1>
              <Link
                to="/"
                className="my-1 block text-dark dark:text-white rounded-md text-sm"
              >
                Home
              </Link>
              <Link
                to="/projects"
                className="my-1 block text-dark dark:text-white rounded-md text-sm"
              >
                Projects
              </Link>
              <Link
                to="/blogs"
                className="my-1 block text-dark dark:text-white rounded-md text-sm"
              >
                Blogs
              </Link>
              <Link
                to="/about"
                className="my-1 block text-dark dark:text-white rounded-md text-sm"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="my-1 block text-dark dark:text-white rounded-md text-sm"
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
                  <FontAwesomeIcon
                    className="text-xl hover:text-indigo cursor-pointer mx-2 my-2 font-medium"
                    icon={faFacebookF}
                  />
                  <FontAwesomeIcon
                    className="text-xl hover:text-indigo cursor-pointer mx-2 my-2 font-medium"
                    icon={faTwitter}
                  />
                  <FontAwesomeIcon
                    className="text-xl hover:text-2xl hover:text-indigo cursor-pointer mx-2 my-2 font-medium"
                    icon={faNode}
                  />
                </li>
              </ul>
              <ul>
                <li>
                  <FontAwesomeIcon
                    className="text-xl hover:text-indigo cursor-pointer mx-2 my-2 font-medium"
                    icon={faGithub}
                  />
                  <FontAwesomeIcon
                    className="text-xl hover:text-indigo cursor-pointer mx-2 my-2 font-medium"
                    icon={faInstagram}
                  />
                  <FontAwesomeIcon
                    className="text-xl hover:text-indigo cursor-pointer transform-scale mx-2 my-2 font-medium"
                    icon={faLinkedinIn}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="bg-white dark:bg-dark mx-1 my-3" />
        <div className="grid grid-cols-1 md:grid-cols-2 text-center">
          <p className="mx-3 my-3">
            Copyright &copy; {new Date().getFullYear()} Ankit Tailor
          </p>
          <p className="mx-3 my-3">
            Built with <span role="img" aria-label="heart"> ❤️</span> & Open sourced on <FontAwesomeIcon icon={faGithub} />
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer
