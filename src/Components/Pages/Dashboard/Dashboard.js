import React from 'react'
import { useContext } from 'react'
import { userContext } from '../../../Context/userContext'
import { Header } from './Header'
import './dash-css/Dashboard.css'
import { Sidebar } from './Sidebar'
import { MainContent } from './mainContent/Main-content'
import { useState } from 'react'
import { Modal } from './Modals/Modal'
import { useEffect } from 'react'
import { useUser } from '../../../DB/useUser'


export const Dashboard = () => {
  const { user } = useContext(userContext)
  console.log(user)
  const [openModal, setOpenModal] = useState(false)
  console.log(openModal)
  const [turnLocation, setTurnLocation] = useState(false)
  const [coordination, setCoordination] = useState({ latitude: '', longitude: '' })


  //get current location 
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



  return (
    <div className='dashboard'>
      <Sidebar setOpenModal={setOpenModal} />
      <div className='main-profile'>
        <Modal open={openModal} setOpenModal={setOpenModal} turnLocation={turnLocation} setTurnLocation={setTurnLocation} coordination={coordination} />
        <Header />
        <MainContent />
      </div>
    </div>
  )
}
