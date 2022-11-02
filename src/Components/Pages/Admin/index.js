import React from 'react'
import './admin.scss'
import Sidebar from './admin-component/sidebar/ad-sidebar'
import { Navbar } from './admin-component/navbar/ad-nav'
import { Widget } from './admin-component/Widgets/Widget'
import { Chart } from './admin-component/charts/chart'
import { Featured } from './admin-component/featured/featured'

export const Admin = () => {
  return (
    <div className='admin'>
      <Sidebar />
      <div className='admin-container'>
        <Navbar />
        <div className="widgets">
          <Widget type="Users"/>
          <Widget type="Products"/>
          <Widget type="NGO"/>
          <Widget type="Market"/>
        </div>
        {/* <div className="charts">
          <Featured/>
          <Chart/>
        </div> */}
      </div>
    </div>
  )
}
