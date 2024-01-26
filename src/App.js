import React from 'react'
import { Navbar, Brand, CTA } from './Components/index'
import {
  Header,
  Footer,
  Blog,
  Possibilty,
  Features,
  WhatGPT3,
} from './Container/index'
import './App.css'

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibilty />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
