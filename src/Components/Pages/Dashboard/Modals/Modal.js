import React from 'react'
import { useEffect } from 'react'
import './Modal.scss'
import logo1 from '../../../../assets/logo1.png'

export const Modal = ({ open, setOpenModal }) => {
  if (!open) return null
  function closeModal() {
    setOpenModal(false)
  }
  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <div className='logo'>
          <img src={logo1} alt="" />
        </div>
        <span className="close" onClick={closeModal}>&times;</span>
        
        <div className='modal-head'>
          <h3>Upload your post</h3>
        </div>
        <p>Some text in the Modal..</p>
      </div>
    </div>
  )
}
