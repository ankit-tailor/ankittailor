import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout/Layout"
import SEO from "../components/SEO/seo"

function NotFound() {
  return (
    <Layout>
      <SEO siteTitle="404!" />
      <div className="h-screen w-screen dark:bg-dark bg-white text-dark dark:text-white">
        <div className="flex h-screen">
          <div className="m-auto">
            <h1 className="text-center font-bold">
              <span className="text-indigo text-6xl sm:text-9xl">404! </span>
              <br />
              <span className="text-3xl sm:text-4xl">page not found :( </span>
            </h1>
            <Link to="/">
              <h1 className="mt-10 text-center font-bold">
                <span className="text-indigo hover:underline text-3xl">
                  Go back to Home{" "}
                </span>
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default NotFound
