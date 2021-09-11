import React from "react"
import About from "../components/about/About"
import Layout from "../components/layout/Layout"
import SEO from "../components/SEO/seo"

function about() {
  return (
    <Layout>
      <SEO siteTitle="About" />
      <About />
    </Layout>
  )
}

export default about
