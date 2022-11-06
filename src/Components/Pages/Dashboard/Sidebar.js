import React, { useContext } from 'react'
import { useState } from 'react'
import { userContext } from '../../../Context/userContext'
import Najla from './Najla.jpg'

export const Sidebar = ({setOpenModal}) => {
  const {user} =  useContext(userContext)
  // console.log('user.photoURL' ,user.photoURL )
  function showModal() {
    setOpenModal(false)
  }
  
  return (
    
    <div className='sidebar-profile'>
      <div className="sidebar-content">
        <div className='user-pic'>
          <img src={Najla} alt="" />
          <div className='username'>{user ? user.displayName : 'username'}</div>
          <button>Edit</button>
        </div>
        <ul>
          <li>
            <i className="uil uil-chat">
            </i>
          </li>
          <li>
            <i className="uil uil-plus" onClick={showModal}>
            
            </i>
          </li>
          <li>
            <i className="uil uil-setting"></i>
          </li>
          <li>
            <i className="uil uil-signout">
            </i>
            {/* <i class="uil uil-signin">
            </i> */}
          </li>
          <li></li>
        </ul>
      </div>
    </div>
  )
}
