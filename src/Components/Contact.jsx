import React, { useState } from 'react'
import './Contact.css'
import { formatWhatsAppMessage, generateWhatsAppURL } from '../utils/whatsapp.js'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState('');

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField('');
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Format message for WhatsApp
      const whatsappMessage = formatWhatsAppMessage(formData);
      const whatsappURL = generateWhatsAppURL(whatsappMessage);
      
      // Open WhatsApp in new tab
      window.open(whatsappURL, '_blank');
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
      
      // Show success message
      setTimeout(() => {
        alert('Redirecting to WhatsApp! Your message has been prepared.');
      }, 500);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className='contact' id='contact'>
      <div className="contact-title">
        <h1>Get In Touch</h1>
        <p className="contact-subtitle">Let&apos;s create something amazing together</p>
      </div>
      
      <div className="contact-section">
        <div className="contact-left">
          <h2>Let&apos;s talk</h2>
          <p>Excited to take on new projects—let&apos;s connect!</p>
          
          <div className="contact-details">
            <div className="contact-detail">
              <i className="fa-regular fa-envelope-open"></i>
              <a href="mailto:vibhuyadav0061@gmail.com">vibhuyadav0061@gmail.com</a>
            </div>
            <div className="contact-detail">
              <i className="fa-solid fa-phone"></i>
              <a href="tel:+916377340061">+91 6377340061</a>
            </div>
            <div className="contact-detail">
              <i className="fa-brands fa-whatsapp"></i>
              <a href="https://wa.me/916377340061" target="_blank" rel="noopener noreferrer">
                WhatsApp Direct
              </a>
            </div>
          </div>
        </div>

        <div className="contact-form-card">
          <form className="contact-right" onSubmit={onSubmit}>
            <div className="form-group">
              <div className="input-container">
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus('name')}
                  onBlur={handleBlur}
                  className={`form-input ${errors.name ? 'error' : ''} ${formData.name || focusedField === 'name' ? 'filled' : ''}`}
                  required
                />
                <label className={`floating-label ${formData.name || focusedField === 'name' ? 'active' : ''}`}>
                  Your Name *
                </label>
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>
            </div>

            <div className="form-group">
              <div className="input-container">
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus('email')}
                  onBlur={handleBlur}
                  className={`form-input ${errors.email ? 'error' : ''} ${formData.email || focusedField === 'email' ? 'filled' : ''}`}
                  required
                />
                <label className={`floating-label ${formData.email || focusedField === 'email' ? 'active' : ''}`}>
                  Email Address *
                </label>
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
            </div>

            <div className="form-group">
              <div className="input-container">
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus('message')}
                  onBlur={handleBlur}
                  rows="6"
                  className={`form-textarea ${errors.message ? 'error' : ''} ${formData.message || focusedField === 'message' ? 'filled' : ''}`}
                  required
                ></textarea>
                <label className={`floating-label ${formData.message || focusedField === 'message' ? 'active' : ''}`}>
                  Your Message *
                </label>
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>
            </div>

            <button 
              type='submit' 
              className={`contact-submit ${isSubmitting ? 'submitting' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <i className="fa-solid fa-spinner fa-spin"></i>
                  Sending to WhatsApp...
                </>
              ) : (
                <>
                  <i className="fa-brands fa-whatsapp"></i>
                  Send via WhatsApp
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
