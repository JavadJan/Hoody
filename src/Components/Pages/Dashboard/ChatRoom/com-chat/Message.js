import React, { useContext, useEffect, useRef } from 'react'
import { ChatContext } from '../context/chatContext'
import { userContext } from '../../../../../Context/userContext'

export const Message = ({ms}) => {
  const {user} = useContext(userContext)
  const {data } = useContext(ChatContext)
  const ref = useRef()
  useEffect(()=>{
    ref.current?.scrollIntoView({behavior : "smooth"})
  }, [ms])
  
  console.log('mssssssssss', ms )
  return (
    <div ref ={ref} className={`message ${ms.senderId===user.uid ? "owner" : ''}`}>
      <div className="messageInfo">
        <img src={ms.senderId === user.uid ? user.photoURL : data.user.photoURL} alt="" />
        <span>just now</span>
      </div>
      <div className='messageContent'>
        <p>{ms.text}</p>
        {ms.img && <img src={ms.img} alt="" />}
      </div>
    </div>
  )
}