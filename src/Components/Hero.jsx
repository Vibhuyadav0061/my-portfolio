import React from 'react'
import './Hero.css'
import vibhu_img from '../assets/vibhu_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
function Hero() {
  return (
    <div className='hero' id='hero'>
      <img src={vibhu_img} alt="Vibhu_image" />
      <h1><span>I'm Vibhu Yadav</span> , Web developer.</h1>
      <p>Versatile C++ Programmer | Expertise in Html , Css , Javascript, React.js , C, C++, Python, Node.js, and Express.js | Transforming Ideas into Innovative Solutions</p>
      <div className="hero_action">
        <div className="contactme">
        <AnchorLink className="anchor-link" offset={50} href="#contact">Contact With Me</AnchorLink>
        </div>
        <div className="myresume">
           <a href="https://drive.google.com/file/d/1rYCVfZwIAs5fM2JSh0gyR-hrfKRidEV7/view?usp=sharing">My Resume</a>
        </div>
      </div>
    </div>
  )
}

export default Hero
