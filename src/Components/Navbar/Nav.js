import React from 'react'
import {Link} from 'react-router-dom'
import './Nav.css'
export const Nav = () => {
  return (
    <nav>
        <h3>Logo</h3>
        <ul>
            <Link to = "/Contact"><li>Contact Us</li></Link>
            <Link to = "/About"><li>About</li></Link>
            <Link to = "/Login"><li>Login</li></Link>
            <Link to = "/SignIn"><li>Sign in</li></Link>
        </ul>
        <button>Menu</button>
    </nav>
  )
}
