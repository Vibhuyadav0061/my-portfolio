import React from 'react'
import './Contact.css'
function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "498670f0-0f7e-4117-9c6b-c4a1089e529d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };
  return (
    <div className='contact' id='contact'>
      <div className="contact-title">
        <h1>Get In Touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h2>Let's talk</h2>
            <p>Excited to take on new projects—let's connect!</p>
            <div className="contact-details">
           
                <div className="contact-detail">
                   
                <i className="fa-regular fa-envelope-open"></i>
                <a href="mailto:vibhuyadav0061@gmail.com">vibhuyadav0061@gmail.com</a>
                </div>
                <div className="contact-detail">
                <i className="fa-solid fa-phone"></i>
                <a href="tel:+916377340061">+91 6377340061</a>
                </div>
                
            </div>
        </div>
        <form className="contact-right" onSubmit={onSubmit}>
            <label htmlFor="name">Your Name</label>
            <input type="text"  placeholder='Enter Your Name' name='name'/>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder='Enter Your Email' name='email' />
            <label htmlFor="message">Write Your Message</label>
           <textarea name="message" rows="8" placeholder='Enter Your Message'></textarea>
           <button type='submit' className="contact-submit">Contact Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
