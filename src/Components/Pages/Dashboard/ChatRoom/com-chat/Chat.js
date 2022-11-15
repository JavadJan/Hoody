import React, { useContext } from 'react'

import { UilEllipsisH } from '@iconscout/react-unicons'
import { UilUserPlus } from '@iconscout/react-unicons'
import { Messages } from './Messages'
import { Input } from './Input'
import { ChatContext } from '../context/chatContext'
import { userContext } from '../../../../../Context/userContext'
export const Chat = ({openModalChat,  setOpenModalChat}) => {
  const {data} = useContext(ChatContext)
  const {user} = useContext(userContext)
  console.log(data)

  if (!openModalChat) return null
  async function closeModal() {
    setOpenModalChat(false)
  }
  return (
    <div className='chat'>
        <div className="chatInfo">
            <span>{data.user.displayName}</span>
            <div className="ChatIcon">
                <UilUserPlus className='i'/>
                <UilEllipsisH className='i'/>
                <span className="close" onClick={closeModal}>&times;</span>
            </div>
        </div>
        {data && <Messages/>}
        <Input/>
    </div>
  )
}