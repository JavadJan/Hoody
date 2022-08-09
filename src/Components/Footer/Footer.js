import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
export const Footer = () => {
    return (
        <footer>
            <h3>LOgo</h3>
            <ul>
                <Link to="/Contact"><li>Contact Us</li></Link>
                <Link to="/About"><li>About</li></Link>
                <Link to="/Login"><li>Login</li></Link>
                <Link to="/SignIn"><li>Sign in</li></Link>
            </ul>
        </footer>
    )
}
