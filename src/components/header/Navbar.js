import React, { useState } from "react"
import { Transition } from "@headlessui/react"
import WbSunnyIcon from "@material-ui/icons/WbSunny"
import NightsStayIcon from "@material-ui/icons/NightsStay"
import { graphql, Link, useStaticQuery } from "gatsby"
import "./Navbar.css"
import { useContext } from "react"
import { ThemeContext } from "../../providers/ThemeProvider"
import Img from "gatsby-image"
// import HeroImage from "../../../static/hero-logo.png"

function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, toggleTheme } = useContext(ThemeContext)

  const heroImage = useStaticQuery(graphql`
    query HeroImageQuery {
      file(relativePath: { eq: "hero-logo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const toggleThemeIcon = () =>
    theme === "dark" ? (
      <WbSunnyIcon
        onClick={toggleTheme}
        className="ml-2 cursor-pointer text-dark dark:text-white items-center"
      />
    ) : (
      theme === "light" && (
        <NightsStayIcon
          onClick={toggleTheme}
          className="ml-2 cursor-pointer text-dark dark:text-white items-center"
        />
      )
    )

  return (
    <>
      {/* <div className=""> */}
      <nav className="bg-white dark:bg-dark">
        <div className="px-8 sm:px-0 sm:container sm:mx-auto">
          <div className="flex items-center justify-between h-16">
            {/* <div className="flex justify-evenly items-center"> */}
            {/* <div className="flex-shrink-4">
              <header> */}
            {/* <span className="text-active text-xl"> &lt;</span>
                <span className="text-indigo text-3xl dark:text-white brand-name">
                  Ankit Tailor
                </span>
                <span className="text-active text-xl"> /&gt;</span> */}
            {/* <img src={HeroImage} className="w-8 h-10 sm:w-10 sm:h-14" /> */}
            {/* <Link to="/">
                  <Img
                    fluid={heroImage.file.childImageSharp.fluid}
                    alt="profile_photo"
                    className="cursor-pointer animate-logo shadow-2xl w-10 h-14"
                  />
                </Link>
              </header>
            </div> */}
            <div className="">
              <div className="flex items-center space-x-2 md:space-x-4">
                <Link
                  to="/"
                  className="block dark:hover:bg-linkDark rounded-lg hover:bg-linkLight text-dark dark:text-white px-2 md:px-3 py-1 rounded-md text-md font-medium"
                  activeClassName="dark:bg-linkDark bg-linkLight rounded-lg shadow-xl"
                >
                  Home
                </Link>
                <Link
                  to="/blogs"
                  className="block dark:hover:bg-linkDark rounded-lg hover:bg-linkLight text-dark dark:text-white px-2 md:px-3 py-1 rounded-md text-md font-medium"
                  activeClassName="dark:bg-linkDark bg-linkLight rounded-lg shadow-xl"
                >
                  Blogs
                </Link>
                <Link
                  to="/about"
                  className="block dark:hover:bg-linkDark rounded-lg hover:bg-linkLight text-dark dark:text-white px-2 md:px-3 py-1 rounded-md text-md font-medium"
                  activeClassName="dark:bg-linkDark bg-linkLight rounded-lg shadow-xl"
                >
                  About
                </Link>
                {/* <Link
                  to="/contact"
                  className="block dark:hover:text-active hover:text-active text-dark dark:text-white px-1 md:px-3 py-2 rounded-md text-md font-medium"
                  activeClassName="dark:text-active text-active"
                >
                  Contact
                </Link> */}
              </div>
            </div>
            {toggleThemeIcon()}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav
