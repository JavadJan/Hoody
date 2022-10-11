import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import './Footer.css'

       /* REACT ICONS */
import {FaFacebookF} from 'react-icons/fa';
import {BsTwitter,BsInstagram,BsSuitHeartFill}from 'react-icons/bs';
import {ImPinterest2} from 'react-icons/im'

export const Footer = () => {
    return (
        <footer>
            <div className="footer1">
                <div className="logo">HOoDY</div>
            </div>
          <div className="footer2">
            <h3>Menu</h3>
                <Link>Home</Link>
                <Link>About</Link>
                <Link>Service</Link>
                <Link>Contact</Link>
                <Link>Subscribe</Link>       
          </div>
          <div className="footer3">
              <h3>
                contact us
              </h3>
              <span>+123 456 789</span>
              <span>email@domain.com</span>
              <span>location</span>

          </div>
          <div className="footer4">
            <h3>Check our social activities</h3>
            <ul className="social-network">
            <li><a href="#" target="_blank"><FaFacebookF></FaFacebookF></a></li>
            <li><a href=""><BsTwitter></BsTwitter> </a></li>
            <li><a href=""><BsInstagram></BsInstagram></a></li>
            <li><a href=""><ImPinterest2></ImPinterest2></a></li>
            </ul>
          </div>
            <div className="footer-copyRight">
            <small>Copyright © 2012 -{new Date().getFullYear()} all right reserved <span>HOODY</span></small>
            </div>
        </footer>

    )
}
