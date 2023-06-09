import React from "react"
import About from "./components/about"
import Contact from "./components/contact"
import Header from "./components/header"
import Intro from "./components/intro"
import Portfolio from "./components/portfolio"
import Skills from "./components/skills"
import Socialicons from "./components/socialicons"


export default function Home() {
  return (
  <div className="bg-gray-700">

  <Socialicons />
  <Header />
  <Intro /> 
  <About />
  <Portfolio />
  <Skills />
  <Contact />
  </div>
   
  )
}