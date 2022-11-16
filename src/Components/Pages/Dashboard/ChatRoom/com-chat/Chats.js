import { doc, onSnapshot } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { ChatContext } from '../context/chatContext'
import { userContext } from '../../../../../Context/userContext'
import { DbContext } from '../../../../../Context/DBContext'

export const Chats = ({uid}) => {
  const [chats, setChats] = useState([])
  const {dispatch} = useContext(ChatContext)
  const { db } = useContext(DbContext)

  useEffect(() => {
    const getChats = async () => {
      const unsub = await onSnapshot(doc(db, 'userChats', uid), (doc) => {
        setChats(doc.data())
      })
      return () => {
        unsub()
      }
    }
    uid && getChats()

  }, [uid])

  //when user want to start to chat 
  const handleSelect = async (u)=>{
    dispatch({type:"CHANGE_USER", payload:u } )
    console.log(u)
  }



  return (
    <div className='chats'>
      {chats && Object.entries(chats).sort((a,b)=>b[1].date - b[1].date).map((chat) => (
        <div className="userChat" key={chat[0]} onClick={()=>handleSelect(chat[1].userInfo)}>
          <img src={chat[1].userInfo.photoURL} alt="" />
          <div className="userChatInfo">
            <span>{chat[1].userInfo.displayName}</span>
            {chat[1] &&<p>{chat[1].lastMessage?.text.slice(0,20)}</p>}
          </div>
        </div>
      )
      )}
    </div>
  )
}
