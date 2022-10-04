import React, { useState, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Nav.css'
export const Nav = () => {

  const headerRef = useRef()

  let menuOpen = false;

  const menuBurgerOPen = (e) => {
    var btn = e.target;
    if (!menuOpen) {
      headerRef.current.style.transform =
        "translateX(0)";
      btn.classList.add("open");
      menuOpen = true;
    } else {
      headerRef.current.style.transform =
        "translateX(100%)";
      btn.classList.remove("open");
      menuOpen = false;
    }
  }

  const [color, setColor] = useState(false);
  // const changeColor = () => {
  //   if (window.scrollY >= 90) {
  //     setColor(true);
  //   } else {
  //     setColor(false);
  //   }
  // };
  // window.addEventListener("scroll", changeColor);


  return (
    <div id='header'>
      <nav className={color ? "nav-links-scroll" : "nav-links"}>
        <div className="iconPart">
          <div className="circle"></div>

        </div>
        <ul className='navList' ref={headerRef}>
          <li>
            <Link className="active"
              to="/home"
            >
              Home
            </Link>
          </li>
          {/* spy={true}
              smooth={true}
              offset={-100}
              duration={500} */}
          <li>
            <Link to="/about"
            >About</Link>

          </li>
          <li>
            <Link to="/SignUp">
              Sign Up
            </Link>
          </li>

          <li>
            <Link to="/contact"> Contact</Link>

          </li>
          <li>
            <NavLink to="/Login" className="subscribe">Login</NavLink>
          </li>
        </ul>
        <div
          className="menu-burger"
          onClick={menuBurgerOPen}
        >
          <div className="menu-btn-burger"></div>
        </div>

      </nav>
    </div>

  )
}
