import React from 'react'
import { useContext } from 'react'
import { userContext } from '../../../Context/userContext'
import { Header } from './Header'
import './Dashboard.css'
import { Sidebar } from './Sidebar'
import { MainContent } from './mainContent/Main-content'
import { useState } from 'react'
import { Modal } from './Modals/Modal'


export const Dashboard = () => {
  const { user } = useContext(userContext)
  console.log(user)
  const [openModal, setOpenModal] = useState(false)
  console.log(openModal)

  return (
    <div className='dashboard'>
      <Sidebar setOpenModal={setOpenModal} /> 
      <div className='main-profile'>
        <Modal open={openModal} setOpenModal={setOpenModal} />
        <Header/>
        <MainContent />
      </div>
    </div>
  )
}
