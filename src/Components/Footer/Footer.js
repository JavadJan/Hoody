import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
export const Footer = () => {
    return (
        <div id="footer">
            <footer>
                <h3>LOgo</h3>
                <ul>
                    <li><Link to="/Contact">Contact Us</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Login">Login</Link></li>
                    <li><Link to="/SignIn">Sign in</Link></li>
                </ul>
                <ul>
                    <li><Link to="/Contact"><i className="fa-brands fa-google"></i></Link></li>
                    <li><Link to="/About"><i className="fa-brands fa-facebook-f"></i></Link></li>
                    <li><Link to="/Login"><i className="fa-brands fa-instagram"></i></Link></li>
                    <li><Link to="/SignIn"><i className="fa-brands fa-linkedin"></i></Link></li>
                </ul>
            </footer>
        </div>

    )
}
