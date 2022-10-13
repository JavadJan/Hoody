import React from 'react'
import './About.css'

import black from '../../../assets/about-back.png'
import pattern from '../../../assets/about-pattern.png'

export const About = () => {
  return (
    <div className='about-main'>
        <div className="about-sections">
          
          <div className="section-left">
        <div className="about-content">
          <p>
          Founded in 2022, <span>Hoody </span>is a corporation to raise awareness of the importance of charitable giving,starting with those who are closest to them.
           offer a variety of options to make charitable giving convenient in various ways
          </p>
          <button>Learn More</button>
        </div>
          </div>
          <div className="section-right">
            <div className="blackImg"><img src={black} alt="" /></div>
          </div>
        </div>

    </div>
  )
}