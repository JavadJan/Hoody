import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getItemsById } from '../../../../DB/getItems'
import { Photos } from './Photos'
import {UpdateModal} from '../Modals/updateModal'

export const UserItems = ({ id ,items ,  setItems }) => {
    const [updateModalOpen , setUpdateModalOpen] = useState(false)
    const [updateItem , setUpdateItem] = useState({})
    const [turnLocation, setTurnLocation] = useState(false)
    const [coordination, setCoordination] = useState({ latitude: '', longitude: '' })

  // turn location 
  useEffect(() => {
    if (turnLocation) {
      if (navigator.geolocation) {
        console.log('take loc', 'checkbox get to', turnLocation)
        navigator.geolocation.getCurrentPosition(showPosition);
      }

    }
    else {
      console.log('take loc', 'checkbox get to', turnLocation)
      setCoordination({ latitude: '', longitude: '' })
    }

    function showPosition(position) {
      setCoordination({ latitude: position.coords.latitude, longitude: position.coords.longitude })
    }
  }, [turnLocation])

    //3. third way with using useEffect
    useEffect(() => {
        getItemsById(id).then((data) => {
            setItems(data)
        })
    }, [id])
  
  return (
    <div className='user-items'>
      <UpdateModal updateModalOpen={updateModalOpen} setUpdateModalOpen = {setUpdateModalOpen} coordination={coordination} updateItem = {updateItem} setCoordination={setCoordination} setTurnLocation/>
      {

        items && items.map((item) =>{ return (
          item.linkImage && <Photos item={item} setUpdateModalOpen={setUpdateModalOpen}  updateModalOpen={updateModalOpen} setUpdateItem={setUpdateItem}/>
        )})
      }
      
    </div>
  )
}
