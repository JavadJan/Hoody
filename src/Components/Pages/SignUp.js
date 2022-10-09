import React, { useRef } from 'react'
import { useState } from 'react';
import login from '../../assets/login1.png'
import "../css/style.css";
import { useNavigate } from 'react-router-dom';
import { DoesUserExist } from '../../DB/DoesUserExist';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useContext } from 'react';
import { DbContext } from '../../Context/DBContext';
import { addDoc, collection } from 'firebase/firestore';



export const SignUp = () => {
  const navigate = useNavigate()
  const { auth, db } = useContext(DbContext)
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [error, setError] = useState('')

  const handleSignUp = async (event) => {
    event.preventDefault()
    console.log(username, email, pass)

    //check in database the username is already used or not
    const doesUserExit = await DoesUserExist(username)

    if (doesUserExit.length === 0) {
      try {
        console.log('usernameDoesNotExist:')

        //create a username with email and pass in Authentication system in firestore
        const createdResult = await createUserWithEmailAndPassword(auth, email, pass)
          .catch((err) => {
            setError(err)
          })
        // after created the display name of user will update with user name
        await updateProfile(createdResult.user, {
          displayName: username
        })

        // the user who registered will create in fireStore
        //create a collection
        addDoc(collection(db, 'users'), {
          userId: createdResult.user.uid,
          username: username.toLowerCase(),
          password: pass,
          emailAddress: email.toLowerCase(),
        })

        //after register the user will taken to Login page
        navigate('./Login')
      } catch (error) {
        setUsername('')
        setEmail('')
        setPass('')
      }
    }
    else {
      setError("username is exist!")
    }
  }

  return (
    <>
      <div className='container_signup'>
        <div className='signup-page'>
          <div className="box-img">
            <img src={login} alt="" />
          </div>
          <div className='signup-box'>
            <h1>Register for free</h1>

            <div className="btnGroup">
              <button className="facebook" >
                <i className="fa-brands fa-facebook-f"></i>
              </button>
              <button className="google">
                <i className="fa-brands fa-google"></i>
              </button>
            </div>

            <form onSubmit={handleSignUp} method="POST">
              <div className='input'>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id='name'
                  value={username}
                  placeholder='Enter your name'
                  onChange={({ target }) => { setUsername(target.value) }} />
              </div>
              <div className='input'>
                <label htmlFor="name">Email</label>
                <input
                  type="Email"
                  id='email'
                  value={email}
                  placeholder='Enter you email'
                  onChange={({ target }) => { setEmail(target.value) }} />
              </div>
              <div className='input'>
                <label htmlFor="name">Password</label>
                <input
                  type="Password"
                  id='pass'
                  value={pass}
                  placeholder='Enter Password'
                  onChange={({ target }) => { setPass(target.value) }} />
              </div>
              <div>
                <button type="submit" className='btn'>Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
