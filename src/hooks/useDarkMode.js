import { useState, useEffect } from "react"
import useMedia from "./useMedia"

const isBrowser = typeof window !== "undefined"

export default () => {
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    if (theme === "light") {
      if (isBrowser) window.localStorage.setItem("theme", "dark")
      setTheme("dark")
    } else {
      if (isBrowser) window.localStorage.setItem("theme", "light")
      setTheme("light")
    }
  }

  const prefersDarkMode = useMedia(
    ["(prefers-color-scheme: dark)"],
    [true],
    false
  )

  useEffect(() => {
    const localTheme = isBrowser && window.localStorage.getItem("theme")
    if (
      (isBrowser && window.localStorage.theme === "dark") ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
    if (localTheme) {
      if (isBrowser) window.localStorage.setItem("theme", localTheme)
      setTheme(localTheme)
    } else {
      if (prefersDarkMode) {
        setTheme("dark")
      } else {
        setTheme("light")
      }
    }
  }, [prefersDarkMode])

  return [theme, toggleTheme]
}
