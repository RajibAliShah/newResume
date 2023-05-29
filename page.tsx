import React from "react"
import About from "./components/About"
//import Cards from "./components/Cards"
import Contact from "./components/Contact"
import Header from "./components/Header"
import Intro from "./components/Intro"
import Portfolio from "./components/Portfolio"
import Skills from "./components/Skills"
import Socialicons from "./components/Socialicons"


export default function Home() {
  return (
  <>
  <Socialicons />
  <Header />
  <Intro />
  <About />
  
  <Portfolio />
  <Skills />
  <Contact />
  </>
  )
}
