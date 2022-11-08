import React, { useState } from "react";
import "../css/Login.css";
import LogImg from "../../assets/log.svg";
import RegisterImg from "../../assets/rocket.svg";
import { DbContext } from "../../Context/DBContext";
import { DoesUserExist } from "../../DB/DoesUserExist";
import { createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider, TwitterAuthProvider, OAuthProvider, signInWithRedirect, signInWithCredential, signInWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { useContext } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { userContext } from "../../Context/userContext";
import * as ROUTES from "../Route/ROUTES.js"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo1 from '../../assets/logo1.png';
import { NavLink } from "react-router-dom";
import { Nav } from "../Navbar/Nav";

export function Login() {
  const navigate = useNavigate()
  const [signUpMode, setSignUpMode] = useState(false)
  const { db, auth } = useContext(DbContext)
  const { user } = useContext(userContext)

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  console.log('user', user)

  const notifyError = (message) => toast.error(message, {
    position: "bottom-center",
    autoClose: 1500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });



  const notifySuccess = (message) => toast.success(message, {
    position: "bottom-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });



  const signUpButton = () => {
    setSignUpMode(true)
  };
  const signInButton = () => {
    setSignUpMode(false)
  };
  let toggleClassCheck = signUpMode ? ' sign-up-mode' : '';


  // handle login 
  const handleLogin = async (event) => {
    event.preventDefault();
    console.log('password , email: ', password, email)
    await signInWithEmailAndPassword(auth, email, password)
      .then((userConditional) => {

        navigate(`/p/${user.displayName}`)
        console.log(userConditional.user)
      }).catch((error) => {
        setEmail('');
        setPassword('');
        console.log(error.message)
        // setError('This user is not registered!')
        notifyError('Please add your email!')
      })

  }

  //-------------------Login with google
  const handleLoginGoogle = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider)

    navigate(`/p/${user.displayName}`)
  }

  // --------------------------Login with Facebook
  const handleLoginFacebook = async () => {
    try {
      const provider = new FacebookAuthProvider()
      await signInWithPopup(auth, provider)
      navigate(`/p/${user.displayName}`)
    } catch (error) {
      setError("this user is not registered")
    }
  }


  //handle sign up
  const handleSignup = async (event) => {
    event.preventDefault();
    //does username exist?
    const userExist = await DoesUserExist(email)

    //use auth state and add to with email
    if (userExist.length === 0) {
      console.log("userExist: ", { username, email, password }, userExist, auth)
      try {
        const createdResult = await createUserWithEmailAndPassword(auth, email, password)
          .catch((err) => {
            setError(err)
          })
        console.log('added user with email and pass!', createdResult.user.uid)
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
        console.log('sign up done!')
        navigate(ROUTES.Login)
      } catch (error) {
        setUsername('')
        setEmail('')
        setPassword('')
        // setError('unsuccessful to register! ')
        notifyError('Unsuccessful to register!')

      }
    }
    else {
      setError('username already exist!')

    }
    //go to login mode
  }

  //handle google sign up
  const handleGoogleSignUp = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider)

    console.log('provider : ', user)
    await addDoc(collection(db, 'users'), {
      userId: user.uid,
      username: user.displayName,
      email: user.email

    })
    navigate(ROUTES.Login)
  }

  //handle facebook sign up
  const handleFacebookSignUp = async (event) => {
    event.preventDefault()
    const provider = new FacebookAuthProvider()
    await signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        // setUserr(result.user);
        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        console.log(accessToken)


      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);
        console.log(error.message, errorMessage)
        // ...
      });

    
      const currentUser = JSON.parse(localStorage.getItem('authUser'))

   await addDoc(collection(db, 'users'), {
      userId: currentUser.uid,
      username: currentUser.displayName,
      email: currentUser.email,
      itemId: []
    })
    // console.log(user.uid)
    setSignUpMode(false)

  }
  //handle tweeter sign up
  const handleTwitterSignUp = async () => {
    const provider = new TwitterAuthProvider()
    await signInWithPopup(auth, provider)
    console.log('sign up with twitter')

    await addDoc(collection(db, 'users'), {
      userId: user.uid,
      username: user.displayName,
      email: user.email
    })
    navigate(ROUTES.Login)
  }
  //handle linkedin sign up
  const handleAppleSignUp = async () => {
    const provider = new OAuthProvider('apple.com')
    await signInWithPopup(auth, provider)
    await addDoc(collection(db, 'users'), {
      userId: user.uid,
      username: user.displayName,
      email: user.email
    })

  }

  const style = {
    // color: 'red',
    // margin: 'auto',
    // position: 'absolute',
    color: "#ff642f",
    margin: "auto",
    position: "absolute",
    bottom: -12,
    /* text-align: center; */
    /* display: flex; */
    /* justify-content: center; */
    justifySelf: "center",
    border: "2px solid #28877f",
    padding: "5px 12px",
    textTransform: 'capitalize',


  }

  return (
    <>
      <Nav />
      {/* <NavLink to="/" className="logoLogin">
    <img src={logo1} alt=""></img></NavLink> */}
      <div className={`container${toggleClassCheck}`}>

        <div className="forms-container">
          <div className="signin-signup">

            {error && <p className="error" style={style}>{error}</p>}
            {/* to login mode form */}
            <form action="#" className="form sign-in-form" onSubmit={handleLogin}>
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input value={email} type="text" placeholder="Email" onChange={({ target }) => setEmail(target.value)} required />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" value={password} onChange={({ target }) => setPassword(target.value)} required />
              </div>
              <button type="submit" className="btn solid">Login</button>
              <p className="social-text">Or Login with social platforms</p>
              <div className="social-media">
                <Link href="#" className="social-icon" onClick={handleLoginGoogle}>
                  <i className="fab fa-google" ></i>
                </Link>
                <Link href="#" className="social-icon" onClick={handleLoginFacebook}>
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link href="#" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link href="#" className="social-icon">
                  <i className="fab fa-apple"></i>
                </Link>
              </div>
            </form>

            {/* to sign up mode from */}

            <form action="#" className="form sign-up-form" onSubmit={handleSignup}>
              <h2 className="title">Sign up</h2>

              <div className="input-field">
                <i className="fas fa-user"></i>
                <input value={username} onChange={({ target }) => { setUsername(target.value) }} type="text" placeholder="Username" required />
              </div>

              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input value={email} onChange={({ target }) => { setEmail(target.value) }} type="email" placeholder="Email" required />
              </div>

              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input value={password} onChange={({ target }) => { setPassword(target.value) }} type="password" placeholder="Password" required />
              </div>


              <button type="submit" className="btn">Sign up</button>

              <p className="social-text">Or Sign up with social platforms</p>
              <div className="social-media">
                <Link href="#" className="social-icon" onClick={handleGoogleSignUp}>
                  <i className="fab fa-google"></i>
                </Link>
                <Link href="#" className="social-icon" onClick={handleFacebookSignUp}>
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link href="#" className="social-icon" onClick={handleTwitterSignUp}>
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link href="#" className="social-icon" onClick={handleAppleSignUp}>
                  <i className="fab fa-linkedin-in"></i>
                </Link>
              </div>
            </form>
          </div>
          <ToastContainer />
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
    </>
  );
}

export default Login;
