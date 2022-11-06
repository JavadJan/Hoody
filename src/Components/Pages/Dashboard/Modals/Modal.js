import React from 'react'
import { useEffect } from 'react'
import './Modal.scss'
import logo1 from '../../../../assets/logo1.png'
import { useState } from 'react'
import { storage } from '../../../../DB/firebase'
import { UilPlus } from '@iconscout/react-unicons'
import { UilCloudUpload } from '@iconscout/react-unicons'

export const Modal = ({ open, setOpenModal, setTurnLocation , coordination}) => {
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
    e.preventDefault()
    const item = {imgURL: image,type: type,category: category,explain:explain , coordination:coordination
    }
    console.log(item)
  }

  console.log('coordination', coordination)





  return (
    <div id="myModal" className="modal">
      <div className="modal-content">

        <div className='modal-head'>
          <img src={logo1} alt="" />
          <span className="close" onClick={closeModal}>&times;</span>
        </div>

        <div id="upload-image">
          <form id='form' onSubmit={handleSaveImage}>

            <div className="content-form">

              <div className='upload'>

                <div className='upload-content'>
                  <input className="file" type="file" accept='image/*' onChange={({ target }) => { setImage(target.files[0]) }} />
                  <span className='btnUpload'><UilPlus />Upload</span>
                </div>

                <div className='preview'>
                  {!image && <UilCloudUpload className="cloud" />}
                  {image && <img src={URL.createObjectURL(image)} alt="arr" />}
                </div>

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
                    <select name="categories" id="category" value="Select Category" onChange={({ target }) => { setCategory(target.value) }}>
                      <option value="Costume">Costume</option>
                      <option value="Sports">Sports</option>
                      <option value="Appliance Home">Appliance Home</option>
                      <option value="Toys">Toys</option>
                      <option value="Electronic">Electronic</option>
                      <option value="Gaming">Gaming</option>
                      <option value="Discount">Discount</option>
                    </select>
                  </div>

                  <div className='current-location'>
                    <h5 className='title'>Find items in your neighborhood!</h5>
                    <input type="checkbox" className='turn-location' onChange={({ target }) => { setTurnLocation(target.checked) }} />
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
