import React from 'react'
import '../dash-css/photo.scss'
import { UilEllipsisH } from '@iconscout/react-unicons'
import { formatDistance } from 'date-fns'


export const Photos = ({ src }) => {
  return (
    <>
      <div className='post'>

        <div className="header-post">
          <UilEllipsisH className="icon-list" />
        </div>
        <div className='photo-post'>
          <img width="250px" height='200px' src={src} alt="" />
        </div>

        <div className="details-post">
          <p className='time'>2 days ago</p>
          <p>Lorem ipsum dolor sit amet </p>
        </div>

      </div>
    </>
  )
}
