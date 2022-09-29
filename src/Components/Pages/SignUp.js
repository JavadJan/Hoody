import React, { useRef } from 'react'
import { useState } from 'react';
import login from '../../assets/login1.png'
import "../css/style.css";
import { useNavigate } from 'react-router-dom';



export const SignUp = () => {
  const navigate = useNavigate()
  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const passRef = useRef(null)

  const [name , setName] = useState()
  const [email , setEmail] = useState()
  const [pass , setPass] = useState()

  const handleSignUp = ()=>{

  }

  return (
    <div className='container_signup'>
      <div className='signup-page'>
        <div className="box-img">
          <img src={login} alt="" />
        </div>
        <div className='signup-box'>
          <h1>Register for free</h1>
          <div className="btnGroup">
            <button className="facebook" >
              <i class="fa-brands fa-facebook-f"></i>
            </button>
            <button className="google">
              <i class="fa-brands fa-google"></i>
            </button>
          </div>
          <form action={handleSignUp} method="POST">
            <div className='input'>
              <label htmlFor="name">Name</label>
              <input type="text" id='name' ref={nameRef} onChange={target => setName(target.value)}/>
            </div>
            <div className='input'>
              <label htmlFor="name">Email</label>
              <input type="Email" id='name' ref={emailRef} onChange={((target)=>{setEmail(target.value)})}/>
            </div>
            <div className='input'>
              <label htmlFor="name">Password</label>
              <input type="Password" id='name' ref={passRef} onChange={((target)=>{setPass(target.value)})} />
            </div>
            <div>
              <button type="submit" className='btn'>Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
