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
import { ChatRoom } from './ChatRoom/pages'
import { UserItems } from './mainContent/UserItems'
import { UpdateModal } from './Modals/updateModal'
import { getItemsById } from '../../../DB/getItems'




export const Dashboard = () => {
  const { user } = useContext(userContext)
  console.log(user)
  const [openModal, setOpenModal] = useState(false)
  console.log(openModal)
  const [turnLocation, setTurnLocation] = useState(false)
  const [coordination, setCoordination] = useState({ latitude: '', longitude: '' })
  const [items, setItems] = useState(null)
  const [openModalChat, setOpenModalChat] = useState(false)
  const [updateModalOpen, setUpdateModalOpen] = useState(false)
  const [updateItem, setUpdateItem] = useState({})

  const [openItems, setOpenItems] = useState(false)


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
    getItemsById(user.uid).then(async (data) => {
      await setItems(data)
    })
  }, [turnLocation])



  return (
    <div className='dashboard'>
      <Sidebar setOpenModal={setOpenModal} setOpenModalChat={setOpenModalChat} setOpenItems={setOpenItems} />
      <div className='main-profile'>
        <UpdateModal updateModalOpen={updateModalOpen} setUpdateModalOpen={setUpdateModalOpen} coordination={coordination} updateItem={updateItem} setCoordination={setCoordination} setTurnLocation />
        <UserItems uid={user.uid} items={items} openItems={openItems} setOpenItems={setOpenItems} setUpdateItem={setUpdateItem} />
        <Modal open={openModal} setOpenModal={setOpenModal} turnLocation={turnLocation} setTurnLocation={setTurnLocation} coordination={coordination} setItems={setItems} />
        <ChatRoom openModalChat={openModalChat} setOpenModalChat={setOpenModalChat} />
        {/* <UserItems openItemsModal={setOpenItems}/> */}
        {/* <Header /> */}
        <MainContent coordination={coordination} items={items} setItems={setItems} />
      </div>
    </div>
  )
}