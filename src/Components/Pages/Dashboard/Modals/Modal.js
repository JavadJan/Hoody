import React from 'react'
import './Modal.css'

export const Modal = ({modal}) => {
  console.log(modal)
  return (
    modal &&( <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close">&times;</span>
          <p>Some text in the Modal..</p>
        </div>
      </div>)
  )
}
