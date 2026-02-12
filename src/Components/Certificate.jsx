import { useState } from 'react'
import certification from '../assets/certificate.js'
import './Certificate.css'
import { FaAward, FaExternalLinkAlt, FaCalendarAlt, FaGraduationCap, FaTimes, FaEye } from 'react-icons/fa'
import { HiOutlineBadgeCheck } from 'react-icons/hi'

function Certificate() {
    const [selectedCertificate, setSelectedCertificate] = useState(null)
    const [filter, setFilter] = useState('All')

    const certificateTypes = ['All', 'Professional Certificate', 'Specialization', 'Certification']

    const filteredCertificates = filter === 'All' 
        ? certification 
        : certification.filter(cert => cert.type === filter)

    const openModal = (certificate) => {
        setSelectedCertificate(certificate)
    }

    const closeModal = () => {
        setSelectedCertificate(null)
    }

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter)
    }

    return (
        <div className='certificate-container'>
            <div className="certificate-header">
                <h1>Certifications & Achievements</h1>
                <p className="certificate-subtitle">
                    Showcasing my commitment to continuous learning and professional development
                </p>
            </div>

            {/* Filter Buttons */}
            <div className="certificate-filters">
                {certificateTypes.map((type) => (
                    <button 
                        key={type}
                        className={`filter-btn ${filter === type ? 'active' : ''}`}
                        onClick={() => handleFilterChange(type)}
                    >
                        {type}
                    </button>
                ))}
            </div>

            {/* Certificates Grid */}
            <div className="certificate-grid">
                {filteredCertificates.map((certificate) => (
                    <div 
                        key={certificate.id} 
                        className="certificate-card"
                        onClick={() => openModal(certificate)}
                    >
                        <div className="certificate-image-container">
                            <img 
                                src={certificate.img} 
                                alt={certificate.title}
                                className="certificate-image"
                            />
                            <div className="certificate-overlay">
                                <div className="overlay-content">
                                    <FaEye className="view-icon" />
                                    <span>View Certificate</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="certificate-content">
                            <div className="certificate-badge">
                                <HiOutlineBadgeCheck className="badge-icon" />
                                <span className="certificate-type">{certificate.type}</span>
                            </div>
                            
                            <h3 className="certificate-title">{certificate.title}</h3>
                            
                            <div className="certificate-meta">
                                <div className="meta-item">
                                    <FaGraduationCap className="meta-icon" />
                                    <span>{certificate.issuer}</span>
                                </div>
                                <div className="meta-item">
                                    <FaCalendarAlt className="meta-icon" />
                                    <span>{certificate.date}</span>
                                </div>
                            </div>
                            
                            <p className="certificate-description">
                                {certificate.description}
                            </p>
                            
                            <div className="certificate-skills">
                                {certificate.skills.slice(0, 3).map((skill, index) => (
                                    <span key={index} className="skill-tag">{skill}</span>
                                ))}
                                {certificate.skills.length > 3 && (
                                    <span className="skill-tag more">+{certificate.skills.length - 3} more</span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Achievement Stats */}
            <div className="achievement-stats">
                <div className="stat-card">
                    <FaAward className="stat-icon" />
                    <div className="stat-content">
                        <h3>{certification.length}</h3>
                        <p>Certifications Earned</p>
                    </div>
                </div>
                <div className="stat-card">
                    <FaGraduationCap className="stat-icon" />
                    <div className="stat-content">
                        <h3>3+</h3>
                        <p>Learning Platforms</p>
                    </div>
                </div>
                <div className="stat-card">
                    <HiOutlineBadgeCheck className="stat-icon" />
                    <div className="stat-content">
                        <h3>100%</h3>
                        <p>Completion Rate</p>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {selectedCertificate && (
                <div className="certificate-modal" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={closeModal}>
                            <FaTimes />
                        </button>
                        
                        <div className="modal-header">
                            <div className="modal-badge">
                                <HiOutlineBadgeCheck className="badge-icon" />
                                <span>{selectedCertificate.type}</span>
                            </div>
                            <h2>{selectedCertificate.title}</h2>
                            <div className="modal-meta">
                                <span className="issuer">{selectedCertificate.issuer}</span>
                                <span className="date">{selectedCertificate.date}</span>
                            </div>
                        </div>
                        
                        <div className="modal-body">
                            <div className="modal-image">
                                <img 
                                    src={selectedCertificate.img} 
                                    alt={selectedCertificate.title}
                                />
                            </div>
                            
                            <div className="modal-details">
                                <h3>About this Certificate</h3>
                                <p>{selectedCertificate.description}</p>
                                
                                <h3>Skills Gained</h3>
                                <div className="modal-skills">
                                    {selectedCertificate.skills.map((skill, index) => (
                                        <span key={index} className="skill-tag">{skill}</span>
                                    ))}
                                </div>
                                
                                <div className="modal-actions">
                                    <a 
                                        href={selectedCertificate.credentialUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="credential-link"
                                    >
                                        <FaExternalLinkAlt />
                                        View Credential
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Certificate
