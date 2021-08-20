import React from "react"

const Intro = () => {
  return (
    <div className="dark:bg-dark bg-white text-dark dark:text-white">
      <div className="sm:container py-12 sm:mx-auto">
        <div className="py-10 px-5 sm:px-20 sm:py-20">
          <h1 className="text-2xl sm:text-5xl my-3 font-bold">
            I'm Ankit Tailor
          </h1>
          <p className="sm:text-lg md:text-xl text-active container">
            Hi there, welcome to my own little corner on the internet. I am a
            software engineer building web applications. I have a passion for
            programming and enjoy building products that solve real life
            problems.I spend my time exploring and learning new technologies,
            love solving problems.
            <br /> Outside programming you can find me on instagram, shoot me a
            meme! I'll happy to see ;)
          </p>
          <button className="block shadow-2xl sm:inline w-8/12 sm:w-4/12 md:w-3/12 lg:w-2/12 bg-white text-indigo py-2 sm:m-0 my-6 mx-auto rounded px-4">
            View Resume
          </button>
          <button className="block shadow-2xl sm:inline w-8/12 sm:w-4/12 md:w-3/12 lg:w-2/12 bg-indigo text-white py-2 mx-auto sm:m-6 my-4 rounded px-4">
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  )
}

export default Intro
