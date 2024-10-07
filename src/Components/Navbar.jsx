import React, { useState } from 'react'
import { useRef } from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Navbar() {
  const menuRef = useRef()
  const openMenu = ()=>{
    menuRef.current.style.right = "0"
  }
  const closeMenu = ()=>{
    menuRef.current.style.right = "-350px"
  }


  return (
    <div className='navbar'>
      <img src={logo} alt="logo"  className='logo'/> 
     <span className='nav-open' onClick={openMenu}><i class="fa-solid fa-bars"></i></span>
      <ul ref={menuRef} className="nav-menu">
       <span className='nav-close' onClick={closeMenu} > <i class="fa-regular fa-circle-xmark"></i></span>
        <li> <AnchorLink className="anchor-link"  href="#hero" >Home</AnchorLink> </li>
        <li><AnchorLink className="anchor-link" offset={50} href="#about">About </AnchorLink></li>
        <li><a href="https://drive.google.com/file/d/1rYCVfZwIAs5fM2JSh0gyR-hrfKRidEV7/view?usp=sharing">Resume</a></li>
        <li><AnchorLink className="anchor-link" offset={50} href="#mywork">Projects</AnchorLink> </li>
        <li><AnchorLink className="anchor-link" offset={50} href="#contact">Contact Me</AnchorLink> </li>
      </ul>
    </div>
  )
}

export default Navbar
