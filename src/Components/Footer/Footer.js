import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import './Footer.css'

       /* REACT ICONS */
import {FaFacebookF} from 'react-icons/fa';
import {BsTwitter,BsInstagram}from 'react-icons/bs';
import {ImPinterest2} from 'react-icons/im'

export const Footer = () => {
    return (
        <footer>
            <div className="footer1">
                <div className="logo">HOoDY</div>
            </div>
          <div className="footer2">
                <Link>Home</Link>
                <Link>About</Link>
                <Link>Service</Link>
                <Link>Contact</Link>
                <Link>Subscribe</Link>       
          </div>
          <div className="footer3">

          </div>
          <div className="footer4">
            <h4>Check our social activities</h4>
            <ul className="social-network">
            <li><a href="#" target="_blank"><FaFacebookF></FaFacebookF></a></li>
            <li><a href=""><BsTwitter></BsTwitter> </a></li>
            <li><a href=""><BsInstagram></BsInstagram></a></li>
            <li><a href=""><ImPinterest2></ImPinterest2></a></li>
            </ul>
          </div>
        </footer>

    )
}
