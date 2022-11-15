import { signOut } from 'firebase/auth'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import user from '../img/img1.jpg'
import { userContext } from '../../../../../Context/userContext'
import { DbContext } from '../../../../../Context/DBContext'
import { useUser } from '../../../../../DB/useUser'

export const Navbar = () => {
  const navigate = useNavigate()
  const {user} = useContext(userContext)
  const { data} = useContext(userContext)
  const { db , auth} = useContext(DbContext)
  const { user: { displayName, userId, id } } = useUser()


  console.log(user)
  return user &&  (
    <div className='navbar-chat'>
      <span className='logo'></span>
      <div className="user">
        {user.photoURL && <img src={user.photoURL} alt="" />}
        <span>{user.displayName ? user.displayName : displayName}</span>
        {/* <button >Logout</button> */}
      </div>
    </div>
  )
}
