import React, { useContext } from 'react'
import { Navbar } from './Navbar'
import { Search } from './Search'
import { Chats} from './Chats'
import { userContext } from '../../../../../Context/userContext'

export const Sidebar = () => {
  const { user } = useContext(userContext)
  console.log(user)
  return (
    <div className='sidebar-chat'>
        <Navbar/>
        <Search/>
        {user && <Chats uid={user.uid}/>}
    </div>
  )
}