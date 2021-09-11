import React from "react"
import Layout from "../components/layout/Layout"
import SEO from "../components/SEO/seo"

function contact() {
  return (
    <Layout>
      <SEO siteTitle="Contact" />
      <div className="dark:bg-dark bg-white text-dark dark:text-white">
        <div className="lg:container py-4 lg:mx-auto">
          <div className="py-2 lg:px-5 lg:px-20 sm:py-2">
            <h1 className="text-4xl sm:text-3xl mx-8 my-3 font-bold">
              <span className="text-indigo underline">
                Contact
                <span role="img" aria-label="wave">
                  🚀
                </span>
              </span>
            </h1>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default contact
