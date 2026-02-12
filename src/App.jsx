import './App.css'
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
import About from './Components/About.jsx'
import Mywork from './Components/Mywork.jsx'
import Contact from './Components/Contact.jsx'
import Certificate from './Components/Certificate.jsx'
import Footer from './Components/Footer.jsx'
import WhatsAppFloat from './Components/WhatsAppFloat.jsx'

function App() {
  return (
    <div className="app">
      <Navbar/>
      <main>
        <Hero/>
        <About/>
        <Mywork/>
        <Certificate/>
        <Contact/>
      </main>
      <Footer/>
      <WhatsAppFloat/>
    </div>
  )
}

export default App
