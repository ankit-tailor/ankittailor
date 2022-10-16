import loadable from "@loadable/component"
import React from "react"
import { ThemeProvider } from "../../providers/ThemeProvider"
const Footer = loadable(() => import("../footer/Footer"))
const Navbar = loadable(() => import("../header/Navbar"))

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
