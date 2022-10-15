import React, { useState } from "react"
import SEO from "../components/SEO/seo"
import Layout from "../components/layout/Layout"

function Friday() {
  const date = new Date()
  const currentDay = date.getDay()
  const [currentHours, currentMinutes, currentSeconds] = [
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
  ]

  const [day, setDay] = useState(
    currentDay > 5 ? currentDay - (currentDay % 5) : 5 - currentDay
  )
  const [hours, setHours] = useState(23 - currentHours)
  const [minutes, setMinutes] = useState(59 - currentMinutes)
  const [seconds, setSeconds] = useState(59 - currentSeconds)

  const getTime = () => {
    const currentDay = date.getDay()
    const leftDays =
      currentDay > 5 ? currentDay - (currentDay % 5) : 5 - currentDay
    setDay(leftDays)
    setHours(23 - date.getHours())
    setMinutes(59 - date.getMinutes())
    setSeconds(59 - date.getSeconds())
  }

  React.useEffect(() => {
    const interval = setInterval(() => getTime(), 1000)

    return () => clearInterval(interval)
  })

  return (
    <Layout>
      <SEO siteTitle="Friday haiii !!🥳🍻" />
      <div className="dark:bg-dark bg-white text-dark dark:text-white">
        {day === 4 ? (
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
                ></iframe>{" "}
              </div>
            </div>
          </div>
        ) : day > 0 ? (
          <div className="px-4 flex h-screen items-center justify-center">
            <span className="text-2xl font-extrabold gradient-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-800">
              {`${day} days ${hours} hours left until friday!`}
            </span>
          </div>
        ) : (
          <div className="px-4 flex h-screen items-center justify-center">
            <span className="text-2xl font-extrabold gradient-text text-transparent bg-gradient-to-r from-cyan-300 to-blue-800">
              {`${hours} hours ${minutes} minutes and ${seconds} seconds left until friday!`}
            </span>
          </div>
        )}
      </div>
    </Layout>
  )
}

export default Friday
