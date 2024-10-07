import React from 'react'
import './About.css' 
import profile_img from '../assets/vibhu_img.png'
function About() {
  return (
    <div className='about' id='about'>
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div className="about-section">
        <div className="about-left">
             <img src={profile_img} alt="image" />
             
        </div>
        <div className="about-right">
           <div className="about-para">
            <p>Expert in React.js, Node.js, and MongoDB, I've driven the frontend development of 10+ projects, crafting intuitive and efficient web applications.</p>
            <p>With deep knowledge in HTML, CSS, and JavaScript, I create visually appealing interfaces that deliver exceptional user experiences.</p>
           </div>
           <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}}/></div>
            
            <div className="about-skill"><p>JAVASCRIPT</p> <hr style={{width:"50%"}}/></div>
           
            <div className="about-skill"><p>REACT.JS</p> <hr style={{width:"50%"}}/></div>
          
            <div className="about-skill"><p>NODE.JS & EXPRESS.JS</p> <hr style={{width:"50%"}}/></div>
            
            <div className="about-skill"><p>MONGODB</p> <hr style={{width:"50%"}}/></div>
          
            <div className="about-skill"><p>BOOTSTRAP</p> <hr style={{width:"50%"}}/></div>
            
            <div className="about-skill"><p>GITHUB</p> <hr style={{width:"50%"}}/></div>
              
           </div>
        </div>
      </div>
      <div className="about-achivements">
        <div className="about-achivement">
            <h3>200+</h3>
            <p>DSA PROBLEMS</p>
        </div>
        <hr />
        <div className="about-achivement">
            <h3>10+</h3>
            <p>PROJECTS</p>
        </div>
        
      </div>
    </div>
    
  )
}

export default About
