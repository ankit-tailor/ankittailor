import React from "react"
import loadable from "@loadable/component"
const About = loadable(() => import("../components/about/About"))
const Layout = loadable(() => import("../components/layout/Layout"))
const SEO = loadable(() => import("../components/SEO/seo"))

function about() {
  return (
      <Layout>
        <SEO siteTitle="About" />
        <About />
      </Layout>
  )
}

export default about
