import { signOut } from 'firebase/auth';
import React, { useContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router';
import { DbContext } from '../../../Context/DBContext';
import { userContext } from '../../../Context/userContext'
import { useUser } from '../../../DB/useUser';
import Najla from './dash-css/Najla.jpg';

// import '../../Navbar/Nav.scss'

export const Sidebar = ({setOpenModal,setOpenModalChat}) => {
  const {user} =  useContext(userContext)
  // console.log('user.photoURL' ,user.photoURL )
  const { user: { displayName, userId, id } } = useUser()
  const navigate = useNavigate()
  const { auth} = useContext(DbContext)

  function showModal() {
    setOpenModal(true)
  }

  function openChat() {
    setOpenModalChat(true)
  }
  
  return (
    
    <div className='sidebar-profile'>
      <div className="sidebar-content">
        <div className="logo"><span>Hoody</span></div>
        <div className='user-pic'>
          <img src={user.photoURL} alt="" />
          <div className='username'>{user && (user.displayName ? user.displayName : displayName)}</div>
          <button>Edit</button>
        </div>
        <ul>
          <li>
            <i className="uil uil-chat" onClick={openChat}>
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
           {auth && <i className="uil uil-signout" onClick={() => {signOut(auth)
             navigate('/login')
        }}>
            </i>}
            {/* <i class="uil uil-signin">
            </i> */}
          </li>
          <li></li>
        </ul>
      </div>
    </div>
  )
}
