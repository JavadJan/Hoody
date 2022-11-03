import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Default from './Default.png'
import { Modal } from './Modals/Modal'

export const Sidebar = () => {
  const [openModal , setOpenModal] = useState(false)
  

  return (

    <div className='sidebar-profile'>
      <div className="sidebar-content">
        <div className='user-pic'>
          <img src={Default} alt="" />
          <div className='username'>@username</div>
          <button>Edit</button>
        </div>

        <ul>
          <li>
            <i className="uil uil-chat">
            </i>
          </li>
          <li>
            <i className="uil uil-plus" onClick={setOpenModal(true)}>
            <Modal open={openModal}/>
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
