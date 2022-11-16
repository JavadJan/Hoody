import { signOut } from 'firebase/auth';
import React, { useContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router';
import { DbContext } from '../../../Context/DBContext';
import { userContext } from '../../../Context/userContext'
import { useUser } from '../../../DB/useUser';
import { BsFillPencilFill } from 'react-icons/bs'
import { UserItems } from './mainContent/UserItems';
import Default from './dash-css/Default.png'

// import 'antd/dist/antd.css';

export const Sidebar = ({ setOpenModal, setOpenModalChat, setUpdateModalOpen, uid, items, setItems, setOpenItems }) => {

  const { user } = useContext(userContext)
  // console.log('user.photoURL' ,user.photoURL )
  const { user: { displayName } } = useUser()
  const navigate = useNavigate()
  const { auth } = useContext(DbContext)



  function showModal() {
    setOpenModal(true)
  }

  function openChat() {
    setOpenModalChat(true)
  }

  function openModalItems() {
    console.log('true')
    setOpenItems(true)
  }

  return (

    <div className='sidebar-profile'>
      <div className="logo"><span>Hoody</span></div>
      <div className="sidebar-content">

        <div className='user-pic'>
          <div>
            <img src={user.photoURL ? user.photoURL : Default} alt="" />
            <BsFillPencilFill className='edit'></BsFillPencilFill>
          </div>
          <div className="infoUser">
            <span className='username'>{user && (user.displayName ? user.displayName : displayName)}</span>

            <span className='emailUser'><strong>Email: </strong>{user && (user.email ? user.email : displayName)}</span></div>


        </div>
        <ul>
          <li onClick={openChat}>
            <i className="uil uil-chat">
            </i>
            <span>Message</span>
          </li>
          <li onClick={showModal}>
            <i className="uil uil-plus">

            </i>
            <span>Add Item</span>
          </li>
          <li>
            <i className="uil uil-setting"></i>
            <span>Settings</span>
          </li>
       
          <li onClick={openModalItems}>
          <i class="uil uil-eye" ></i>
            <span>show items</span>
          </li>

          <li onClick={() => {
            signOut(auth)
            console.log('logout!')
            navigate('/login')
          }}>
            <i className="uil uil-signout" >
            </i>
            <span>Logout</span>
            {/* <i class="uil uil-signin">
            </i> */}
          </li>

        </ul>
      </div>
    </div>
  )
}
