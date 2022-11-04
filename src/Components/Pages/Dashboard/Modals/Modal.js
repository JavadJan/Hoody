import React from 'react'
import { useEffect } from 'react'
import './Modal.scss'
import logo1 from '../../../../assets/logo1.png'

export const Modal = ({ open, setOpenModal }) => {

  //close modal
  if (!open) return null
  function closeModal() {
    setOpenModal(false)
  }


  //for saving image
  function handleSaveImage(e) {
    e.prevent.Default()
  }

  return (
    <div id="myModal" className="modal">
      <div className="modal-content">
        <div className='modal-head'>
          <img src={logo1} alt="" />
          <span className="close" onClick={closeModal}>&times;</span>
        </div>

        <div id="upload-image">
          <form id='form' onSubmit={handleSaveImage}>
            <div className='upload'>
              <input type="file" accept='image/*' />
            </div>

            <div className='info'>

              <div className='get-info'>
                
                <div className='choose-type'>
                  <h5>Are you going to? </h5>
                  <span>
                    <input type="radio" id='sell' value="sell" name='type' />
                    <label htmlFor="sell">Sell</label>
                  </span>

                  <span>
                    <input type="radio" id='donate' value="Donate" name='type' />
                    <label htmlFor="donate">Donate</label>
                  </span>
                </div>

              </div>

              <button type='onSubmit'>Save</button>
            </div>

          </form>
        </div>



      </div>
    </div>
  )
}
