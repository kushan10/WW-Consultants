import React from 'react'
import './Projects.css'
import project_1 from '../../assets/project1.jpg'
import project_2 from '../../assets/project2.jpg'
import project_3 from '../../assets/project3.jpg'
import p1logo from '../../assets/p1logo.png'
import p2logo from '../../assets/p2logo.png'
import p3logo from '../../assets/p3logo.png'



const Projects = () => {
  return (
    <div className='projects'>
        <div className='project'>
            <img src={project_1} alt='' />
            <div className='caption'>
                <img src={p1logo} alt='' />
                <h3>Electrical Designs</h3>
            </div>
        </div>
        <div className='project'>
            <img src={project_2} alt='' />
            <div className='caption'>
                <img src={p2logo} alt='' />
                <h3>Electrical Testing</h3>
            </div>
        </div>
        <div className='project'>
            <img src={project_3} alt='' />
            <div className='caption'>
                <img src={p3logo} alt='' />
                <h3>Electrical Consultations</h3>
            </div>
        </div>
    </div>
  )
}

export default Projects
