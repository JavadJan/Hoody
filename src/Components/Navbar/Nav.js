import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Nav.css'


export const Nav = () => {

  const[showMenu,setShow]=useState(false);

  const handleMenu=()=>{
    console.log('clicked')
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
            className='item-list1'
                activeClassName="active"
                onClick={()=>{     //when click button hide the menu
                  setShow(false)
                }}
                > 
                  Home</NavLink>
          
            <NavLink to="/about" 
            className='item-list2'
            activeClassName="active"
            onClick={()=>{
              setShow(false)
            }}
            >About</NavLink>

          <NavLink to="/service" 
          className='item-list3'
            activeClassName="active"
            onClick={()=>{
              setShow(false)
            }}
            >Service</NavLink>
         
          
            <NavLink to="/contact" 
            className='item-list4'
            activeClassName="active"
            onClick={()=>{
              setShow(false)
            }}
            > Contact</NavLink>

         
            <NavLink to="/Login" 
            className="subscribe item-list5">Subscribe</NavLink>
        
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
