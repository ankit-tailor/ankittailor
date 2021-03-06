import React, { createContext, useEffect } from "react"
import { useDarkMode } from "../hooks/useDarkMode"

export const ThemeContext = createContext("light")
const isBrowser = typeof window !== "undefined"

export const ThemeProvider = ({ children }) => {
  const [theme, toggleTheme] = useDarkMode()

  useEffect(() => {
    if (
      (isBrowser && window.localStorage.theme === "dark") ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [toggleTheme])

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
