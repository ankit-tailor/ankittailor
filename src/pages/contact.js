import React from "react"
import Layout from "../components/layout/Layout"
import SEO from "../components/SEO/seo"
import {
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { SOCIAL_LINKS } from "../lib/contants"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

function contact() {
  return (
    <Layout>
      <SEO siteTitle="Contact" />
      <div className="dark:bg-dark bg-white text-dark dark:text-white">
        <div className="lg:container mx-8 py-4 lg:mx-auto">
          <div className="py-2 lg:px-5 lg:px-20 sm:py-2">
            <h1 className="text-4xl sm:text-3xl my-3 font-bold">
              <span className="text-indigo underline">
                Contact
                <span role="img" aria-label="wave">
                  📲
                </span>
              </span>
            </h1>
            <p className="text-2xl my-6 font-bold">
              Feel free to contact me incase you need any help or want to do
              some chit-chat :)
            </p>

            <ul>
              <li>
                <div className="flex text-xl items-center">
                  <FontAwesomeIcon
                    className="mx-4 my-2 font-medium"
                    icon={faEnvelope}
                  />
                  <p>
                    {" "}
                    -{" "}
                    <a href={`mailto:${SOCIAL_LINKS.EMAIL}`}>
                      {" "}
                      <span className="mx-4 text-indigo font-bold underline">
                        {" "}
                        Email{" "}
                      </span>{" "}
                    </a>
                  </p>
                </div>
              </li>
              <li>
                <div className="flex text-xl items-center">
                  <FontAwesomeIcon
                    className="mx-4 my-2 font-medium"
                    icon={faLinkedinIn}
                  />
                  <p>
                    {" "}
                    -
                    <span className="mx-4 text-indigo font-bold underline">
                      <a href={SOCIAL_LINKS.LINKEDIN}> LinkedIn</a>{" "}
                    </span>{" "}
                  </p>
                </div>
              </li>
              <li>
                <div className="flex text-xl items-center">
                  <FontAwesomeIcon
                    className="mx-4 my-2 font-medium"
                    icon={faTwitter}
                  />
                  <p>
                    {" "}
                    -
                    <span className="mx-4 text-indigo font-bold underline">
                      <a href={SOCIAL_LINKS.TWITTER}> Twitter</a>{" "}
                    </span>{" "}
                  </p>
                </div>
              </li>
              <li>
                <div className="flex text-xl items-center">
                  <FontAwesomeIcon
                    className="mx-4 my-2 font-medium"
                    icon={faInstagram}
                  />
                  <p>
                    {" "}
                    -{" "}
                    <a hreg={SOCIAL_LINKS.INSTAGRAM}>
                      {" "}
                      <span className="mx-4 text-indigo font-bold underline">
                        {" "}
                        Instagram{" "}
                      </span>{" "}
                    </a>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default contact
