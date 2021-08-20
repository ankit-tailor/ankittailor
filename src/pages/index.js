import React from "react"
import Intro from "../components/intro/Intro"
import Layout from "../components/layout/Layout"
import Skills from "../components/skills/Skills"

const Home = () => {
  return (
    <Layout>
      <Intro />
      <Skills />
    </Layout>
  )
}

export default Home
