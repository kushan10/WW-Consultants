import React from 'react'
import './Hero.css'
import arrow from '../../assets/arrow.png'



const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>Wellcome to WW Consultants</h1>
        <p>Improve your business performance and enhance employee engagement</p>
        <button className='btn'>Explore More <img src={arrow} alt='' /></button>
      </div>
    </div>
  )
}

export default Hero
