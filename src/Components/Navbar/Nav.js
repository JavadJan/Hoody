import React, { useState } from 'react'
import { useEffect } from 'react';
import { NavLink, useLocation} from 'react-router-dom'

// import {NavHashLink as Link} from 'react-router-hash-link'
import { Link } from "react-scroll";
import './Nav.css'

import logo from '../../assets/logo.png'
import logo1 from '../../assets/logo1.png';
import { Home } from '../Route/ROUTES';

export const Nav = () => {



  const [showMenu, setShow] = useState(false);
  // const [classname,setClassName] = useState(false);


  // const changeClassName = ()=>{
  //   if(window.scrollY >= 100){
  //     console.log()
  //   }
  // }

  const handleMenu = () => {
    console.log('clicked')
    setShow(!showMenu)
  }


  const [color, setColor] = useState(false);


  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);

    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
// window.addEventListener('scroll',changeClassName)
  // useEffect(()=>{
  // if(window.innerWidth<=800){
  //  setColor(false)
  // }

  // },[])



  const handleStyle = {
    backgroundColor: "transparent"
  }

  const location = useLocation()

  console.log(location.pathname ==="/login" ? console.log('login' ): console.log('not login') , location.pathname)

  return (
    <header className={color ? "header-scroll" : `header ${location.pathname === '/Login' ? 'forLogin' : ''}`}>
      <div className={`navbar  ${showMenu ? "open" : "hide"}`}>
        <NavLink to="/" className="logo">
          <img src={logo1} alt=""></img></NavLink>
        <nav className='List' >

          <Link to="home" exact="true"
          target='/'
            className='item-list1'
            activeClass='active'
            onClick={() => {     //when click button hide the menu
              setShow(false)
              console.log('clicked')
            }}
            smooth spy
            end        //when click on other button the home will not be active
          >
            Home
            </Link>

          <Link 
            to="about"
            smooth spy
            className='item-list2'
            activeClass='active'
            onClick={() => {
              setShow(false)
            }}>About</Link>

          <Link to="service"
            className='item-list3'
            smooth spy
            activeClass='active'
            onClick={() => {
              setShow(false)
            }}
          >Service</Link>

        <Link to="product"
            className='item-list3'
            activeClass='active'
            smooth spy
            onClick={() => {
              setShow(false)
            }}
            end
          >Products</Link>


          <Link to="contact"
            className='item-list4'
            activeClass='active'
            smooth spy
            onClick={() => {
              setShow(false)
            }}
          > Contact</Link>


          <NavLink to="/Login"
            className="subscribe item-list5"
            smooth spy
            activeClass='active'
            onClick={() => {
              setShow(false)
            }}
            >Subscribe</NavLink>

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

// export default Nav;