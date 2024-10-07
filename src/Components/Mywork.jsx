import React from 'react'
import './Mywork.css'
import Myworkcontent from '../assets/my-work-store.js'
function Mywork() {
  return (
    <div className='mywork' id='mywork'>
      <div className="mywork-header">
        <h1>My work</h1>
      </div>
      <div className="mywork-section">
        {Myworkcontent.map((mywork , index)=>{
            return <a key={index} href={mywork.project_link} target='_blank'><img  src={mywork.project_img} alt="pro-img" /></a>
        })}
      </div>
    </div>
  )
}

export default Mywork
