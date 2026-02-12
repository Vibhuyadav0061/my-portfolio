import { useState, useRef, useEffect } from 'react'
import './Navbar.css'
import Logo from './Logo.jsx'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Navbar() {
  const menuRef = useRef()
  const backdropRef = useRef()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.right = "0"
      setIsMenuOpen(true)
      document.body.classList.add('menu-open')
      // Add backdrop
      if (backdropRef.current) {
        backdropRef.current.classList.add('active')
      }
    }
  }
  
  const closeMenu = () => {
    if (menuRef.current) {
      const screenWidth = window.innerWidth
      const menuWidth = screenWidth <= 480 ? "90vw" : screenWidth <= 768 ? "85vw" : "350px"
      menuRef.current.style.right = `-${menuWidth}`
      setIsMenuOpen(false)
      document.body.classList.remove('menu-open')
      // Remove backdrop
      if (backdropRef.current) {
        backdropRef.current.classList.remove('active')
      }
    }
  }

  const handleNavClick = () => {
    // Auto-close mobile menu when navigation link is clicked
    if (isMenuOpen) {
      closeMenu()
    }
  }

  const handleBackdropClick = () => {
    // Close menu when backdrop is clicked
    if (isMenuOpen) {
      closeMenu()
    }
  }

  // Close menu on window resize if it's open
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        closeMenu()
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isMenuOpen])

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        closeMenu()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isMenuOpen])

  return (
    <>
      <nav className='navbar'>
        <Logo />
        
        <button 
          className={`nav-open ${isMenuOpen ? 'hidden' : ''}`}
          onClick={openMenu}
          aria-label="Open navigation menu"
          aria-expanded={isMenuOpen}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
        
        <ul ref={menuRef} className="nav-menu">
          <button 
            className='nav-close' 
            onClick={closeMenu}
            aria-label="Close navigation menu"
          >
            <i className="fa-regular fa-circle-xmark"></i>
          </button>
          
          <li>
            <AnchorLink 
              className="anchor-link" 
              href="#hero" 
              onClick={handleNavClick}
            >
              Home
            </AnchorLink>
          </li>
          
          <li>
            <AnchorLink 
              className="anchor-link" 
              offset={50} 
              href="#about"
              onClick={handleNavClick}
            >
              About
            </AnchorLink>
          </li>
          
          <li>
            <a 
              href="https://drive.google.com/file/d/1rYCVfZwIAs5fM2JSh0gyR-hrfKRidEV7/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavClick}
            >
              Resume
            </a>
          </li>
          
          <li>
            <AnchorLink 
              className="anchor-link" 
              offset={50} 
              href="#mywork"
              onClick={handleNavClick}
            >
              Projects
            </AnchorLink>
          </li>
          
          <li>
            <AnchorLink 
              className="anchor-link" 
              offset={50} 
              href="#contact"
              onClick={handleNavClick}
            >
              Contact Me
            </AnchorLink>
          </li>
        </ul>
      </nav>
      
      {/* Mobile menu backdrop */}
      <div 
        ref={backdropRef}
        className="mobile-menu-backdrop"
        onClick={handleBackdropClick}
        aria-hidden="true"
      />
    </>
  )
}

export default Navbar
