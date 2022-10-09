import React, { useState } from "react";
import "../css/Login.css";
import LogImg from "../../assets/log.svg";
import RegisterImg from "../../assets/rocket.svg";
import { userContext } from "../../Context/userContext";
import { DbContext } from "../../Context/DBContext";
import { DoesUserExist } from "../../DB/DoesUserExist";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";

export function Login() {
  const [signUpMode, setSignUpMode] = useState(false)

  const { db, auth } = userContext(DbContext)

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const signUpButton = () => {
    setSignUpMode(true)
  };
  const signInButton = () => {
    setSignUpMode(false)
  };
  let toggleClassCheck = signUpMode ? ' sign-up-mode' : '';

  //handle sign up
  const handleSignup = async () => {

    //does username exist?
    const userExist = await DoesUserExist(username)

    //use auth state and add to with email
    if (username.length === 0) {
      try {
        const createdResult = await createUserWithEmailAndPassword(auth, email, password)
          .catch((err) => {
            setError(err)
          })
        // after created the display name of user will update with user name
        await updateProfile(createdResult.user, {
          displayName: username
        })
        //add to firestore
        addDoc(collection(db, 'users'), {
          userId: createdResult.user.uid,
          username: username.toLowerCase(),
          email: email.toLowerCase(),
          password: password
        })
      } catch (error) {
        setUsername('')
        setEmail('')
        setPassword('')
        setError('already username Exist!')
      }
    }
    //go to login mode
  }

  return (
    <div className={`container${toggleClassCheck}`}>
      <div className="forms-container">
        <div className="signin-signup">

            {error && <p className="error">{error}</p>}
          {/* to login mode form */}
          <form action="#" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn solid" />
            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>

          {/* to sign up mode from */}
          <form action="#" className="sign-up-form" onSubmit={handleSignup}>
            <h2 className="title">Sign up</h2>

            <div className="input-field">
              <i className="fas fa-user"></i>
              <input value={username} onChange={({ target }) => { setUsername(target.value) }} type="text" placeholder="Username" />
            </div>

            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input value={email} onChange={({ target }) => { setEmail(target.value) }} type="email" placeholder="Email" />
            </div>

            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input value={password} onChange={(target) => { setPassword(target.value) }} type="password" placeholder="Password" />
            </div>

            <button type="submit" className="btn">Sign up</button>

            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button onClick={signUpButton} className="btn transparent" id="sign-up-btn">
              Sign up
            </button>
          </div>
          <img src={LogImg} className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button onClick={signInButton} className="btn transparent" id="sign-in-btn">
              Sign in
            </button>
          </div>
          <img src={RegisterImg} className="image" alt="" />
        </div>
      </div>
    </div>
  );
}

// export default Login;
