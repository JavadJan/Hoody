import React from 'react'
import './admin.scss'
import Sidebar from './admin-component/sidebar/ad-sidebar'
import { Navbar } from './admin-component/navbar/ad-nav'

export const Admin = () => {
  return (
    <div className='admin'>
      <Sidebar />
      <div className='admin-container'>
        <Navbar/>
        Admin Container
      </div>
    </div>
  )
}
