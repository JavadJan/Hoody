import React from 'react'
import '../dash-css/photo.scss'
import { UilEllipsisH } from '@iconscout/react-unicons'
import { formatDistance, set } from 'date-fns'
import { UilTrashAlt } from '@iconscout/react-unicons'
import { useState } from 'react'


export const Photos = ({ item }) => {
  const [toggle , setToggle] = useState(false)

  //toggle for modify
  function handleToggle() {
    setToggle(!toggle)
  }

  //handleDelete
  function handleDelete(params) {
    alert(params.target.textContent)
  }
  return (
    <>
      <div className='post' id={`${item.id}`}>

        <div className="header-post">
          <UilEllipsisH className="icon-list" onClick={handleToggle}
          />
          {toggle ? (<ul className='modify' >
            <li onClick={handleDelete}>Delete</li>
            <li>Update</li>
          </ul>) : ''}
        </div>
        <div className='photo-post'>
          <img width="280px" height='250px' src={item.linkImage} alt="" />
        </div>

        <div className="details-post">
          <p className='time'>{formatDistance(item.dateCreated, new Date())} ago</p>
          <p>Lorem ipsum dolor sit amet</p>
        </div>

      </div>
    </>
  )
}
