import React from 'react'
import { useEffect } from 'react'
import './Modal.scss'
import logo1 from '../../../../assets/logo1.png'
import { useState } from 'react'

export const Modal = ({ open, setOpenModal }) => {
  const [image, setImage] = useState(null)
  const [type, setType] = useState('donate')
  const [category, setCategory] = useState(null)
  const [explain, setExplain] = useState('')

  console.log(type, category)

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
          <form id='form' onSubmit={handleSaveImage} method="POST">

            <div className="content-form">
              <div className='upload'>
                <input type="file" accept='image/*' onChange={({ target }) => { setImage(target.value) }} />
              </div>

              <div className='info'>

                <div className='get-info'>

                  <div className='choose-type'>
                    <span><h5 className='title'>Are you going to? </h5></span>
                    <span>
                      <input type="radio" id='sell' value="sell" name='type' onChange={({ target }) => { setType(target.value) }} />
                      <label htmlFor="sell">Sell</label>
                    </span>

                    <span>
                      <input type="radio" id='donate' value="Donate" name='type' onChange={({ target }) => { setType(target.value) }} />
                      <label htmlFor="donate">Donate</label>
                    </span>
                  </div>

                  <div className='categories'>
                    <h5 className='title'>what is kind of?</h5>
                    <select name="categories" id="category" onChange={(target) => { setCategory(target.value) }}>
                      <option value="volvo">Costume</option>
                      <option value="saab">Sports</option>
                      <option value="mercedes">Appliance Home</option>
                      <option value="audi">Toys</option>
                      <option value="audi">Electronic</option>
                      <option value="audi">Gaming</option>
                      <option value="audi">Discount</option>
                    </select>
                  </div>

                  <div className='explain'>
                    <h5 className="title">please explain your stock!</h5>
                    <textarea name="" id="" cols="30" rows="8" onChange={({ target }) => { setExplain(target.value) }}></textarea>
                  </div>

                </div>

                <button type='submit'>Save</button>
              </div>

            </div>

          </form>
        </div>



      </div>
    </div>
  )
}
