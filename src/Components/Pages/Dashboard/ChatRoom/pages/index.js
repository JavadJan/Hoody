import React from 'react'
import { Chat } from '../components/Chat'
import { Sidebar } from '../components/Sidebar'
import { ChatContextProvider } from "../context/chatContext";
import './style.css'

export const ChatRoom = ({ openModalChat, setOpenModalChat }) => {
  if (!openModalChat) {
    return null
  }
  return (
    <div className='home-chat'>
      <div className="container-chat">
        <ChatContextProvider>
          <Sidebar />
          <Chat openModalChat={openModalChat} setOpenModalChat={setOpenModalChat} />
        </ChatContextProvider>
      </div>
    </div>
  )
}
