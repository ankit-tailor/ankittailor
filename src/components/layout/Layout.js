import React from "react"
import { ThemeProvider } from "../../providers/ThemeProvider"
import Footer from "../footer/Footer"
import Navbar from "../header/Navbar"

const Layout = ({ children }) => {
  return (
    <ThemeProvider>
      <div>
        <Navbar />
        {children}
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default Layout
