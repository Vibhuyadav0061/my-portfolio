import React from 'react'
import './Footer.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer'>
      <div className="footer-content">
        <div className="footer-columns">
          {/* About Column */}
          <div className="footer-column">
            <h3>Vibhu Yadav</h3>
            <p>Full Stack Developer passionate about creating innovative web solutions. Specialized in React, Node.js, and modern web technologies.</p>
            <div className="footer-social">
              <a href="https://github.com/vibhuyadav0061" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/vibhuyadav0061" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              {/* <a href="https://twitter.com/vibhuyadav0061" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fa-brands fa-twitter"></i>
              </a> */}
              <a href="https://wa.me/916377340061" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><AnchorLink href="#hero">Home</AnchorLink></li>
              <li><AnchorLink href="#about" offset={50}>About</AnchorLink></li>
              <li><AnchorLink href="#mywork" offset={50}>Projects</AnchorLink></li>
              <li><AnchorLink href="#contact" offset={50}>Contact</AnchorLink></li>
              <li><a href="https://drive.google.com/file/d/1rYCVfZwIAs5fM2JSh0gyR-hrfKRidEV7/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a></li>
            </ul>
          </div>

          {/* Contact Info Column */}
          <div className="footer-column">
            <h4>Contact Info</h4>
            <div className="footer-contact">
              <div className="contact-item">
                <i className="fa-regular fa-envelope"></i>
                <a href="mailto:vibhuyadav0061@gmail.com">vibhuyadav0061@gmail.com</a>
              </div>
              <div className="contact-item">
                <i className="fa-solid fa-phone"></i>
                <a href="tel:+916377340061">+91 6377340061</a>
              </div>
              <div className="contact-item">
                <i className="fa-solid fa-location-dot"></i>
                <span>India</span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div className="footer-column">
            <h4>Services</h4>
            <ul className="footer-services">
              <li>Web Development</li>
              <li>Frontend Development</li>
              <li>Backend Development</li>
              <li>UI/UX Design</li>
              <li>API Development</li>
            </ul>
          </div>
        </div>

        {/* Professional Tagline */}
        <div className="footer-cta">
          <h3>Ready to bring your ideas to life?</h3>
          <p>Let&apos;s collaborate and create something amazing together!</p>
          <AnchorLink href="#contact" offset={50} className="cta-button">
            Get In Touch
          </AnchorLink>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {currentYear} Vibhu Yadav. All rights reserved.</p>
            <p className="footer-credentials">Full Stack Developer | React Specialist | Problem Solver</p>
          </div>
          <div className="footer-tech">
            <span>VIBHU YADAV</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
