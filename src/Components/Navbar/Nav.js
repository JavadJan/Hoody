import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Nav.css'


export const Nav = () => {


  const[showMenu,setShow]=useState(false);

  const handleMenu=()=>{
    setShow(!showMenu)
  }



  // const [color, setColor] = useState(false);
  // const changeColor = () => {
  //   if (window.scrollY >= 90) {
  //     setColor(true);
  //   } else {
  //     setColor(false);
  //   }
  // };
  // window.addEventListener("scroll", changeColor);


  return (
    <header>
      <div className={`navbar  ${showMenu ? "open" : "hide"}`}>
        <Link to="/" className="logo">
          HOody </Link>
        <nav className='List' >
         
            <NavLink   to="/" exact="true"
                activeClassName="active"
                onClick={()=>{     //when click button hide the menu
                  setShow(false)
                }}
                > 
                  Home</NavLink>
          
            <NavLink to="/about" 
            activeClassName="active"
            onClick={()=>{
              setShow(false)
            }}
            >About</NavLink>
         
          
            <NavLink to="/contact" 
            activeClassName="active"
            onClick={()=>{
              setShow(false)
            }}
            > Contact</NavLink>

         
            <NavLink to="/Login" className="subscribe">Subscribe</NavLink>
        
        </nav>
        <button
          className="menu-burger"
          onClick={handleMenu}
        >
          <span className="menu-btn-burger"></span>
        </button>

      </div>
    </header>

  )
}
