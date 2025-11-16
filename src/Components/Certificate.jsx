import React from 'react'
import certification from '../assets/certificate.js'
import './Certificate.css'
function Certificate() {
    
  return (
    <div className='certificateContainer'>
        <h1>Certification / Acchivement </h1>
        <div className="certificateShow">
         {certification.map((certificate , index)=>(
            <div className="certificate" key={index}>
                <img src={certificate.img} alt="cer" />
            </div>
         ))}
         </div>
    </div>
  )
}

export default Certificate
