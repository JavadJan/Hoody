import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getItemsById } from '../../../../DB/getItems'
import { Photos } from './Photos'
import { UpdateModal } from '../Modals/updateModal'

export const UserItems = ({ uid, items, setItems, openItems, setOpenItems, setUpdateItem }) => {
  const [updateModalOpen, setUpdateModalOpen] = useState(false)
  const [turnLocation, setTurnLocation] = useState(false)
  const [coordination, setCoordination] = useState({ latitude: '', longitude: '' })

  // turn location 
  if (!openItems) {
    return null
  } else {

  }
  // useEffect(() => {

  //   if (turnLocation) {
  //     if (navigator.geolocation) {
  //       console.log('take loc', 'checkbox get to', turnLocation)
  //       navigator.geolocation.getCurrentPosition(showPosition);
  //     }

  //   }
  //   else {
  //     console.log('take loc', 'checkbox get to', turnLocation)
  //     setCoordination({ latitude: '', longitude: '' })
  //   }

  //   function showPosition(position) {
  //     setCoordination({ latitude: position.coords.latitude, longitude: position.coords.longitude })
  //   }
  // }, [turnLocation, uid])

  //3. third way with using useEffect
  // useEffect(() => {
  // getItemsById(uid).then(async (data) => {
  //   await setItems(data)
  // })
  // }, [uid])
  function closeModal() {
    setOpenItems(false)
  }

  return (
    <div className='main-item'>

      <div className='user-items'>
        <span className="close" onClick={closeModal}>&times;</span>

        {
          items && items.map((item) => {
            return (
              item.linkImage && <Photos item={item} setUpdateModalOpen={setUpdateModalOpen} updateModalOpen={updateModalOpen} setUpdateItem={setUpdateItem} />
            )
          })
        }

      </div>
    </div>
  )
}
