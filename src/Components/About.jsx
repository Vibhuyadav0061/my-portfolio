import './About.css' 
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { 
  FaReact, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaNodeJs, 
  FaGitAlt, 
  FaGithub, 
  FaFigma,
  FaBootstrap,
  FaBrain,
  FaRocket,
  FaClock,
  FaStar
} from 'react-icons/fa'
import { 
  SiTypescript, 
  SiExpress, 
  SiMongodb, 
  SiPostman, 
  SiVercel,
  SiJsonwebtokens 
} from 'react-icons/si'
import { 
  MdApi, 
  MdCode
} from 'react-icons/md'
import { VscCode } from 'react-icons/vsc'

function About() {
  const skills = {
    frontend: [
      { name: 'React.js', icon: <FaReact /> },
      { name: 'JavaScript', icon: <FaJs /> },
      { name: 'HTML & CSS', icon: <FaHtml5 /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
      { name: 'Bootstrap', icon: <FaBootstrap /> }
    ],
    backend: [
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Express.js', icon: <SiExpress /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'REST APIs', icon: <MdApi /> },
      { name: 'JWT Auth', icon: <SiJsonwebtokens /> }
    ],
    tools: [
      { name: 'Git & GitHub', icon: <FaGitAlt /> },
      { name: 'VS Code', icon: <VscCode /> },
      { name: 'Postman', icon: <SiPostman /> },
      { name: 'Figma', icon: <FaFigma /> },
      { name: 'Vercel', icon: <SiVercel /> }
    ]
  };

  const achievements = [
    { number: '200+', label: 'DSA Problems', icon: <FaBrain /> },
    { number: '15+', label: 'Projects', icon: <FaRocket /> },
    { number: '2+', label: 'Years Experience', icon: <FaClock /> },
    { number: '100%', label: 'Client Satisfaction', icon: <FaStar /> }
  ];

  return (
    <div className='about' id='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <p className="about-subtitle">Full Stack Developer & Problem Solver</p>
      </div>

      <div className="about-section">
        <div className="about-left">
          <div className="about-intro">
            <h2>Hi, I&apos;m Vibhu Yadav</h2>
            <p>
              Expert in React.js, Node.js, and MongoDB, I&apos;ve driven the frontend development 
              of 10+ projects, crafting intuitive and efficient web applications.
            </p>
            <p>
              With deep knowledge in HTML, CSS, and JavaScript, I create visually appealing 
              interfaces that deliver exceptional user experiences.
            </p>
            
            <div className="coding-profiles">
              <h3>Coding Profiles</h3>
              <div className="profile-links">
                <a 
                  href="https://leetcode.com/vibhuyadav0061" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="profile-link leetcode"
                >
                  <div className="profile-icon">
                    <MdCode />
                  </div>
                  <div className="profile-info">
                    <span className="profile-name">LeetCode</span>
                    <span className="profile-stats">200+ Problems Solved</span>
                  </div>
                </a>
                
                <a 
                  href="https://github.com/vibhuyadav0061" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="profile-link github"
                >
                  <div className="profile-icon">
                    <FaGithub />
                  </div>
                  <div className="profile-info">
                    <span className="profile-name">GitHub</span>
                    <span className="profile-stats">30+ Repositories</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="about-right">
          <div className="skills-section">
            <h3>Technical Skills</h3>
            
            <div className="skills-categories">
              <div className="skill-category">
                <h4>
                  <FaCss3Alt className="category-icon" />
                  Frontend Development
                </h4>
                <div className="skills-grid">
                  {skills.frontend.map((skill, index) => (
                    <div key={index} className="skill-card">
                      <div className="skill-header">
                        <span className="skill-icon">{skill.icon}</span>
                        <span className="skill-name">{skill.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <h4>
                  <FaNodeJs className="category-icon" />
                  Backend Development
                </h4>
                <div className="skills-grid">
                  {skills.backend.map((skill, index) => (
                    <div key={index} className="skill-card">
                      <div className="skill-header">
                        <span className="skill-icon">{skill.icon}</span>
                        <span className="skill-name">{skill.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="skill-category">
                <h4>
                  <VscCode className="category-icon" />
                  Tools & Technologies
                </h4>
                <div className="skills-grid">
                  {skills.tools.map((skill, index) => (
                    <div key={index} className="skill-card">
                      <div className="skill-header">
                        <span className="skill-icon">{skill.icon}</span>
                        <span className="skill-name">{skill.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-achievements">
        {achievements.map((achievement, index) => (
          <div key={index} className="achievement-card">
            <div className="achievement-icon">{achievement.icon}</div>
            <h3>{achievement.number}</h3>
            <p>{achievement.label}</p>
          </div>
        ))}
      </div>

      <div className="about-cta">
        <h3>Ready to work together?</h3>
        <p>Let&apos;s create something amazing!</p>
        <AnchorLink href="#contact" offset={50} className="cta-button">
          Get In Touch
        </AnchorLink>
      </div>
    </div>
  )
}

export default About
