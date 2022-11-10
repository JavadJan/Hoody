import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getItemsById } from '../../../../DB/getItems'
import { Photos } from './Photos'

export const UserItems = ({ id }) => {

  const [items, setItems] = useState(null)

    //3. third way with using useEffect
    useEffect(() => {
        getItemsById(id).then((data) => {
            setItems(data)
        })
    }, [id])
  
  return (
    <div className='user-items'>
      {
        items && items.map((item) =>{ return (
          item.linkImage && <Photos item={item} />
        )})
      }
      
    </div>
  )
}
