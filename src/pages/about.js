import React, { lazy, Suspense } from "react"

const About = lazy(() => import("../components/about/About"))
const Layout = lazy(() => import("../components/layout/Layout"))
const SEO = lazy(() => import("../components/SEO/seo"))

const renderLoader = () => <p>Loading</p>

function about() {
  return (
    <Suspense fallback={renderLoader()}>
      <Layout>
        <SEO siteTitle="About" />
        <About />
      </Layout>
    </Suspense>
  )
}

export default about
