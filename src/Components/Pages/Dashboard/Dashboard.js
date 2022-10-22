import React from 'react'
import { useContext } from 'react'
import { userContext } from '../../../Context/userContext'
import { Header } from './Header'
import './Dashboard.css'
import { Sidebar } from './Sidebar'
import { MainContent } from './mainContent/Main-content'

export const Dashboard = () => {
  const { user } = useContext(userContext)
  return (
    <div className='dashboard'>
      <Sidebar />

      <div className='main-profile'>
        <Header user={user} />
        <MainContent />
      </div>
    </div>
  )
}
