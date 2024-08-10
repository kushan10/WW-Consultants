import React from 'react'
import './About.css'
import about from '../../assets/about.jpg'

const About = () => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about} alt='about' className='about-img'/>
        </div>
        <div className='about-right'>
            <h2>About Us</h2>
            <br />
            <p>WW Consultants, we use the expertise of our experienced consultants, 
                who can deploy a broad range of proven tools and methodologies, 
                to help companies lead and manage change and transformation, 
                improve business performance and enhance employee engagement.</p>
                <br />
                <h3>Consultations for,</h3>
                <ul>
                    <li>Electrical (LV/MV) Services</li>
                    <li>Solar PV</li>
                    <li>ELV Servicesvices</li>
                    <li>Lightning Protection and Earthing Systemsvices</li>
                    <li>Energy Audits</li>
                    <li>Mechanical Services</li>
                    <li>Inspections, Testing and Certifications</li>
                </ul>
        </div>
      
    </div>
  )
}

export default About
