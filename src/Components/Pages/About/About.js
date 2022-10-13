import React from 'react'
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CountUp from 'react-countup';
import black from '../../../assets/about-back.png'
import pattern from '../../../assets/about-pattern.png'

import {GrInstagram,GrTwitter} from 'react-icons/gr'
import {FaFacebookF,FaLinkedinIn} from 'react-icons/fa'

import { founders } from './founders';

export const About = () => {
  return (
    <div className='about-main contain'>
        <div className="about-sections1">
          
          <div className="section-left">
        <div className="about-content">
          <p>
          Founded in 2022, <span>Hoody </span>is a corporation to raise awareness of the importance of charitable giving,starting with those who are closest to them.
           offer a variety of options to make charitable giving convenient in various ways
          </p>
          <button className='learn'>Learn More</button>
        </div>
        
          </div>
          <div className="section-right">
            <div className="blackImg"><img src={black} alt="" /></div>
          </div>
        </div>

        <div className="about-sections2">

            <div className="circles">
                 <div className="circle-content">
                    <div className="circle">
                        <i class="fa-solid fa-hand-holding-heart"></i>
                        <h3><CountUp start={0} end={19000} duration={5}/>+</h3>
                    </div>
                    <p>Donation Upgrade</p>
                    <small>since 2021</small>
                  </div>


             <div className="circle-content">
                   <div className="circle">
                      <i class="fa-regular fa-handshake"></i>
                      <h3><CountUp start={0} end={12420} duration={5} />+</h3>
                    </div>
                  <p>Charity movement</p>
                  <small>since 2021</small>
             </div>


             <div className="circle-content">
                  <div className="circle">
                     <i class="fa-solid fa-shield-heart"></i>
                     <h3><CountUp start={0} end={14250} duration={5}/>+</h3>
                    </div>
                    <p>Volunteering activities</p>
                    <small>since 2021</small>
              </div>  

           </div> 

           <div className="Founders">
            <h1>Founder's of Hoody</h1>
            <div className="Founders-boxes">
              {founders.map((founder) => {
                return (
                      <div className="Founder-box">
                      <img src={founder.img} alt="" className='founder-img'/>
                      <div className="content-founder">
                      <h5>{founder.title}</h5>
                      <p>{founder.job}</p>
                      <ul className="social-Contact">
                      <li><a href={founder.facebook}><FaFacebookF></FaFacebookF></a></li>
                      <li><a href={founder.twitter}><GrTwitter></GrTwitter></a></li>
                      <li><a href={founder.linkedin}><FaLinkedinIn></FaLinkedinIn></a></li>
                      <li><a href={founder.instagram}><GrInstagram></GrInstagram></a></li>
                        
                      </ul>
                      </div>
                    </div>
                   );
                 })}
           
            </div>
           </div>
         </div>
    </div>
  )
}