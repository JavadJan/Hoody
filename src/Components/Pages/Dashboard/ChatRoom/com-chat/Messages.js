import { doc, onSnapshot } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { ChatContext } from '../context/chatContext'
import { userContext } from '../../../../../Context/userContext'
import { Message } from './Message'
import { DbContext } from '../../../../../Context/DBContext'
export const Messages = () => {
  const [message, setMessage] = useState([])
  const { data } = useContext(ChatContext)
  const { db } = useContext(DbContext)
  const {user} = useContext(userContext)

  console.log(data)

  useEffect(() => {
    const unsub = onSnapshot(doc(db, 'chats', data.chatId), (doc) => {
      console.log(doc)
      doc.exists() &&  setMessage(doc.data().messages)
    })
    return () => { unsub() }
  }, [data.chatId])

  console.log(message)
  return (
    <div className='messages'>
      {message && message.map((msg) => {
        return ( <Message ms = {msg} key={msg.id} /> )
      })}
    </div>
  )
}