import React, { useRef } from 'react'
import login from '../../assets/login.png'
import "./css/style.css";

export const SignIn = () => {
  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const passRef = useRef(null)

  return (
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
        <form action="#">
          <div className='input'>
            <label htmlFor="name">Name</label>
            <input type="text" id='name' ref={nameRef} />
          </div>
          <div className='input'>
            <label htmlFor="name">Email</label>
            <input type="Email" id='name' ref={emailRef} />
          </div>
          <div className='input'>
            <label htmlFor="name">Password</label>
            <input type="Password" id='name' ref={passRef} />
          </div>
          <div>
            <input type="submit" placeholder='Sign Up' className='btn' />
          </div>
        </form>
      </div>
    </div>
  )
}
