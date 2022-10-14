import React from "react"
import SEO from "../components/SEO/seo"
import Layout from "../components/layout/Layout"

function Friday() {
  return (
    <Layout>
      <SEO siteTitle="Friday haiii !!🥳🍻" />
      <div className="dark:bg-dark bg-white text-dark dark:text-white">
        <div className="lg:container py-4 lg:mx-auto">
          <div className="py-2 lg:px-5 lg:px-20 sm:py-2">
            <h1 className="text-4xl sm:text-3xl mx-8 my-3 font-bold">
              <span className="text-indigo">Friday haiii 🥳🍻🚀</span>
            </h1>

            <div className="mx-4">
              <iframe
                className="w-full h-screen"
                src="https://www.youtube.com/embed/HFFlEDw-1SI"
                title="YouTube video player"
                frameborder="1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Friday
