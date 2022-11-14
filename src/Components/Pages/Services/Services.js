import React from 'react'
import './Services.css'

import {FaHandHoldingHeart,
  FaHandsHelping,FaHandHolding,
  FaHandHoldingUsd} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

function Services() {
  return (
    <div className='services about-main' id="service">
      <h1 className="BigTitle">Services</h1>


      <div className="service-parts">
        {/* <div className="content-service">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus numquam obcaecati saepe molestiae repudiandae laboriosam, doloribus ratione placeat voluptatum consequuntur atque sapiente possimus velit eligendi ad illo similique cumque doloremque?
        </div> */}
        <div className="services-boxes">

          <div className="S-Box">
            <div className="icon"><FaHandHoldingHeart></FaHandHoldingHeart></div>
            <h4 className="STitle">Donate</h4>
            <p className="SText">You can share your clothes,toys,electronics ...just be a part of us and be a smile maker</p>
            <a href="" className="SbTN">join</a>
          </div>

          <div className="S-Box">
            <div className="icon"><FaHandsHelping></FaHandsHelping></div>
            <h4 className="STitle">Sell</h4>
            <p className="SText">Benefit by selling your precious items with reasonable prices. Explore our community and be a part of us </p>
            <a href="" className="SbTN">Sell</a>
          </div>

          <div className="S-Box">
            <div className="icon"><FaHandHoldingUsd></FaHandHoldingUsd></div>
            <h4 className="STitle">Donate with money</h4>
            <p className="SText">Your small help can make difference ,Start now </p>
            <a href="" className="SbTN">Donate</a>
          </div>


          <div className="S-Box">
            <div className="icon"><FaHandHolding></FaHandHolding></div>
            <h4 className="STitle">Take</h4>
            <p className="SText">Need stuff? don't worry you can get the item you want and contact the donor. Be a part of our community</p>
            <NavLink to="/Login" className="SbTN">subscribe</NavLink>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Services