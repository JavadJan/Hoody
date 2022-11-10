import React from 'react'
import { Photos } from './Photos'

export const UserItems = ({ id, items }) => {
  
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
