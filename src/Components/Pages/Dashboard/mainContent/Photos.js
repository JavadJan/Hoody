import React from 'react'
import '../dash-css/photo.scss'
import { UilEllipsisH } from '@iconscout/react-unicons'
import { formatDistance } from 'date-fns'


export const Photos = ({ item }) => {

  return (
    <>
      <div className='post'>

        <div className="header-post">
          <UilEllipsisH className="icon-list" />
        </div>
        <div className='photo-post'>
          <img width="250px" height='200px' src={item.linkImage} alt="" />
        </div>

        <div className="details-post">
          <p className='time'>{formatDistance(item.dateCreated, new Date())} ago</p>
          <p>Lorem ipsum dolor sit amet</p>
        </div>

      </div>
    </>
  )
}
