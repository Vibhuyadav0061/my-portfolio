import React from 'react'
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
import About from './Components/About.jsx'

import Mywork from './Components/Mywork.jsx'
import Contact from './Components/Contact.jsx'
import Certificate from './Components/Certificate.jsx'
function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Mywork/>
      <Certificate/>
      <Contact/>
    </div>
  )
}

export default App
