import { useState } from 'react'
import './Mywork.css'
import Myworkcontent from '../assets/my-work-store.js'
import { FaExternalLinkAlt, FaGithub, FaEye } from 'react-icons/fa'
import { BiCodeAlt } from 'react-icons/bi'

function Mywork() {
  const [activeFilter, setActiveFilter] = useState('All Projects')
  const [filteredProjects, setFilteredProjects] = useState(Myworkcontent)

  const filterCategories = ['All Projects', 'Full Stack', 'Frontend', 'Web App']

  const handleFilterChange = (category) => {
    setActiveFilter(category)
    
    if (category === 'All Projects') {
      setFilteredProjects(Myworkcontent)
    } else {
      const filtered = Myworkcontent.filter(project => 
        project.category === category
      )
      setFilteredProjects(filtered)
    }
  }

  return (
    <div className='mywork' id='mywork'>
      <div className="mywork-header">
        <h1>My Projects</h1>
        <p className="mywork-subtitle">Showcasing my passion for creating innovative web solutions</p>
      </div>
      
      <div className="projects-filter">
        {filterCategories.map((category) => (
          <button 
            key={category}
            className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
            onClick={() => handleFilterChange(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mywork-section">
        {filteredProjects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image-container">
              <img src={project.project_img} alt={project.project_name} />
              <div className="project-overlay">
                <div className="project-actions">
                  <a 
                    href={project.project_link} 
                    target='_blank' 
                    rel="noopener noreferrer"
                    className="action-btn primary"
                    title="View Live Project"
                  >
                    <FaEye />
                    <span>Live Demo</span>
                  </a>
                  {project.github_link && (
                    <a 
                      href={project.github_link} 
                      target='_blank' 
                      rel="noopener noreferrer"
                      className="action-btn secondary"
                      title="View Source Code"
                    >
                      <FaGithub />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
            
            <div className="project-content">
              <div className="project-header">
                <h3>{project.project_name}</h3>
                <div className="project-links">
                  <a 
                    href={project.project_link} 
                    target='_blank' 
                    rel="noopener noreferrer"
                    className="external-link"
                    title="View Live Project"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>
              
              <p className="project-description">
                {project.description || "A modern web application built with cutting-edge technologies, focusing on user experience and performance."}
              </p>
              
              <div className="project-tech">
                {project.technologies ? project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                )) : (
                  <>
                    <span className="tech-tag">React</span>
                    <span className="tech-tag">JavaScript</span>
                    <span className="tech-tag">CSS3</span>
                  </>
                )}
              </div>
              
              <div className="project-stats">
                <div className="stat">
                  <BiCodeAlt />
                  <span>{project.category || "Web App"}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mywork-cta">
        <h3>Interested in working together?</h3>
        <p>I'm always excited to take on new challenges and create amazing projects.</p>
        <a href="#contact" className="cta-button">
          Let's Collaborate
        </a>
      </div>
    </div>
  )
}

export default Mywork
