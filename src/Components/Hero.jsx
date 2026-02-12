import './Hero.css'
import vibhu_img from '../assets/vibhu_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { FaDownload, FaArrowRight, FaCode, FaLaptopCode, FaRocket } from 'react-icons/fa'
import { HiOutlineSparkles } from 'react-icons/hi'
import { BiCodeAlt } from 'react-icons/bi'

function Hero() {
  return (
    <div className='hero' id='hero'>
      <div className="hero-background">
        <div className="floating-elements">
          <div className="floating-icon icon-1"><FaCode /></div>
          <div className="floating-icon icon-2"><FaLaptopCode /></div>
          <div className="floating-icon icon-3"><BiCodeAlt /></div>
          <div className="floating-icon icon-4"><FaRocket /></div>
        </div>
      </div>
      
      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-greeting">
            <HiOutlineSparkles className="sparkle-icon" />
            <span>Hello, I'm</span>
          </div>
          
          <h1 className="hero-title">
            <span className="name-highlight">Vibhu Yadav</span>
            <span className="title-line">Full Stack Developer</span>
            <span className="subtitle">& Problem Solver</span>
          </h1>
          
          <p className="hero-description">
            Passionate about creating innovative web solutions with modern technologies. 
            Specialized in <strong>React.js</strong>, <strong>Node.js</strong>, and <strong>MongoDB</strong> 
            with expertise in building scalable, user-centric applications.
          </p>
          
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">200+</span>
              <span className="stat-label">Problems Solved</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Projects Built</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">2+</span>
              <span className="stat-label">Years Experience</span>
            </div>
          </div>
          
          <div className="hero-actions">
            <AnchorLink 
              className="btn-primary" 
              offset={50} 
              href="#contact"
            >
              <span>Let's Work Together</span>
              <FaArrowRight className="btn-icon" />
            </AnchorLink>
            
            <a 
              href="https://drive.google.com/file/d/1rYCVfZwIAs5fM2JSh0gyR-hrfKRidEV7/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <FaDownload className="btn-icon" />
              <span>Download Resume</span>
            </a>
          </div>
          
          <div className="hero-social">
            <span className="social-label">Follow me on:</span>
            <div className="social-links">
              <a href="https://github.com/vibhuyadav0061" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://linkedin.com/in/vibhuyadav" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="https://leetcode.com/vibhuyadav0061" target="_blank" rel="noopener noreferrer">
                LeetCode
              </a>
            </div>
          </div>
        </div>
        
        <div className="hero-right">
          <div className="hero-image-container">
            <div className="image-backdrop"></div>
            <img src={vibhu_img} alt="Vibhu Yadav - Full Stack Developer" className="hero-image" />
            <div className="image-glow"></div>
          </div>
          
          <div className="tech-stack">
            <div className="tech-item">React</div>
            <div className="tech-item">Node.js</div>
            <div className="tech-item">MongoDB</div>
            <div className="tech-item">JavaScript</div>
            <div className="tech-item">Python</div>
            <div className="tech-item">C++</div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-text">Scroll to explore</div>
        <div className="scroll-arrow"></div>
      </div>
    </div>
  )
}

export default Hero
