import React, { useState } from "react"
import { Transition } from "@headlessui/react"
import WbSunnyIcon from "@material-ui/icons/WbSunny"
import NightsStayIcon from "@material-ui/icons/NightsStay"
import { Link } from "gatsby"
import "./Navbar.css"
import { useContext } from "react"
import { ThemeContext } from "../../providers/ThemeProvider"

const isBrowser = typeof window !== "undefined"

function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, toggleTheme } = useContext(ThemeContext)

  const toggleThemeIcon = () => (
    theme === "dark" ? (
      <WbSunnyIcon
        onClick={toggleTheme}
        className="cursor-pointer text-dark dark:text-white items-center"
      />
    ) : (
      theme === "light" && (
        <NightsStayIcon
          onClick={toggleTheme}
          className="cursor-pointer text-dark dark:text-white items-center"
        />
      )
    )
  )

  return (
    <>
      {/* <div className=""> */}
      <nav className="bg-white dark:bg-dark">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* <div className="flex justify-evenly items-center"> */}
            <div className="flex-shrink-4">
              <header>
                <span className="text-active text-xl"> &lt;</span>
                <span className="text-indigo text-3xl dark:text-white brand-name">
                  Ankit Tailor
                </span>
                <span className="text-active text-xl"> /&gt;</span>
              </header>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                <Link
                  to="/"
                  className="block dark:hover:text-active hover:text-active text-dark dark:text-white px-3 py-2 rounded-md text-md font-medium"
                  activeClassName="dark:text-active text-active"
                >
                  Home
                </Link>
                <Link
                  to="/projects"
                  className="block dark:hover:text-active hover:text-active text-dark dark:text-white px-3 py-2 rounded-md text-md font-medium"
                  activeClassName="dark:text-active text-active"
                >
                  Projects
                </Link>
                <Link
                  to="/blogs"
                  className="block dark:hover:text-active hover:text-active text-dark dark:text-white px-3 py-2 rounded-md text-md font-medium"
                  activeClassName="dark:text-active text-active"
                >
                  Blogs
                </Link>
                <Link
                  to="/about"
                  className="block dark:hover:text-active hover:text-active text-dark dark:text-white px-3 py-2 rounded-md text-md font-medium"
                  activeClassName="dark:text-active text-active"
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="block dark:hover:text-active hover:text-active text-dark dark:text-white px-3 py-2 rounded-md text-md font-medium"
                  activeClassName="dark:text-active text-active"
                >
                  Contact
                </Link>
                {toggleThemeIcon()}
              </div>
              {/* </div> */}
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-700 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-offset-2 focus:ring-offset-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block text-dark dark:text-white h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="md:hidden" id="mobile-menu">
            <div className="backdrop">
              <div className="transform shadow-2xl sidebar dark:bg-dark bg-white dark:text-dark px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <div style={{ textAlign: "right" }}>
                  {isOpen && (
                    <button
                      onClick={() => setIsOpen(!isOpen)}
                      type="button"
                      className="bg-gray-700 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-offset-2 focus:ring-offset-white"
                      aria-controls="mobile-menu"
                      aria-expanded="false"
                    >
                      <span className="sr-only">Open main menu</span>
                      <svg
                        className="text-dark dark:text-white block h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  )}
                </div>
                <Link
                  to="/"
                  className="block dark:hover:text-active hover:text-active text-dark dark:text-white px-3 py-2 rounded-md text-md font-medium"
                  activeClassName="dark:text-active text-active"
                >
                  Home
                </Link>
                <Link
                  to="/projects"
                  className="block dark:hover:text-active hover:text-active text-dark dark:text-white px-3 py-2 rounded-md text-md font-medium"
                  activeClassName="dark:text-active text-active"
                >
                  Projects
                </Link>
                <Link
                  to="/blogs"
                  className="block dark:hover:text-active hover:text-active text-dark dark:text-white px-3 py-2 rounded-md text-md font-medium"
                  activeClassName="dark:text-active text-active"
                >
                  Blogs
                </Link>
                <Link
                  to="/about"
                  className="block dark:hover:text-active hover:text-active text-dark dark:text-white px-3 py-2 rounded-md text-md font-medium"
                  activeClassName="dark:text-active text-active"
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="block dark:hover:text-active hover:text-active text-dark dark:text-white px-3 py-2 rounded-md text-md font-medium"
                  activeClassName="dark:text-active text-active"
                >
                  Contact
                </Link>
                {toggleThemeIcon()}
              </div>
            </div>
          </div>
        </Transition>
      </nav>
      <hr className="bg-active dark:bg-white" />
      {/* </div> */}
    </>
  )
}

export default Nav
