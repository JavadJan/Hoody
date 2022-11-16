import React, { useState, useEffect } from "react";
import "../css/Login.css";
import LogImg from "../../assets/log.svg";
import RegisterImg from "../../assets/rocket.svg";
import { DbContext } from "../../Context/DBContext";
import { DoesUserExist } from "../../DB/DoesUserExist";
import { createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider, TwitterAuthProvider, OAuthProvider, signInWithRedirect, signInWithCredential, signInWithEmailAndPassword, EmailAuthProvider } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useContext } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { userContext } from "../../Context/userContext";
import * as ROUTES from "../Route/ROUTES.js"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo1 from '../../assets/logo1.png';
import { NavLink } from "react-router-dom";
import { Nav } from "../Navbar/Nav";
import { useFormik, Formik } from "formik";
import { Schema } from "./Schema";

import Loader from "../Loader/Loader";
import e from "cors";


export function Login() {

  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);



  const navigate = useNavigate()
  const [signUpMode, setSignUpMode] = useState(false)
  const { db, auth } = useContext(DbContext)
  const { user } = useContext(userContext)

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('');


  const [errors,setErrors]=useState({})


  /****-------------Test valid inputs--------------*****/


  //test inputs validation

  // const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit,handleReset } =
  //   useFormik({
  //     initialValues: {
  //       username: "",
  //       email: "",
  //       password: "",
  //     },
  //     validationSchema: Schema,


  //   });

const [values,setValues] = useState({
username:"",
  email:"",
  password:""
})


function handleSubmit(e){
  e.preventDefault();
  setErrors(Schema(values))
}
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
    const res = await signInWithEmailAndPassword(auth, email, password)
      // .then((userConditional) => {
  
        navigate(`/dashboard/${res.user.displayName}`)
        console.log(res.user.displayName)
    try {
      const provider = new EmailAuthProvider()
      await signInWithEmailAndPassword(auth, email, password)
      navigate(`/dashboard/${res.user.displayName}`)
    } catch (error) {
      
      notifyError('wrong email or password!!')
    }

    // })
    // .catch((error) => {
    //   setEmail('');
    //   setPassword('');
    //   console.log(error.message)
    //   // setError('This user is not registered!')
    //   notifyError('Please add your email!')
    // })

  }

  //-------------------Login with google
  const handleLoginGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const res = await signInWithPopup(auth, provider)

    navigate(`/dashboard/${res.user.displayName}`)
  }

  // --------------------------Login with Facebook
  const handleLoginFacebook = async () => {
    try {
      const provider = new FacebookAuthProvider()
      const res = await signInWithPopup(auth, provider)
      navigate(`/dashboard/${res.user.displayName}`)
    } catch (error) {
      setError("this user is not registered")
    }
  }


//Funnction Initialization

const init = () =>{
// e.preventDefault();
 setUsername('');
 setEmail('');
 setPassword('');
}




  //handle sign up

  const handleSignup = async (event) => {
    event.preventDefault();

    if (username==='' || email==="" ||password==="") {
      notifyError('Please fill all the fields')
      handleSubmit()
      // handleSignup()
    } else {


      //does username exist?
      const userExist = await DoesUserExist(email)
      console.log("user exist ====>",userExist)

      //use auth state and add to with email
      if (userExist.length === 0) {
        console.log("userExist: ", username, email, password)
        try {
          const response = await createUserWithEmailAndPassword(auth, email, password)
          // after created the display name of user will update with user name
          console.log('created on auth')

          await updateProfile(response.user, {
            displayName: username
          })
          //add to firestore
          await setDoc(doc(db, 'users', response.user.uid), {
            uid: response.user.uid,
            displayName: response.user.displayName,
            email: response.user.email,
            password: password
          })
          await setDoc(doc(db, 'userChats', response.user.uid), {});

          notifySuccess('Successfully registered!')

          setSignUpMode(false)
        } catch (error) {
          console.log(error)
        
          init()
          // setError('unsuccessful to register! ')
          notifyError('Unsuccessful to register!')

        }
      }
      else {
        notifyError('username already exist!')
        init()
      }
      //go to login mode
    }
  }





  //handle google sign up
  const handleGoogleSignUp = async () => {
    const provider = new GoogleAuthProvider();
    const response = await signInWithPopup(auth, provider)

    console.log('provider : ', user)
    await setDoc(doc(db, 'users', response.user.uid), {
      uid: response.user.uid,
      displayName: response.user.displayName,
      email: response.user.email,
      photoURL: response.user.photoURL
    })
    await setDoc(doc(db, 'userChats', response.user.uid), {});
    setSignUpMode(false)
  }

  //handle facebook sign up
  const handleFacebookSignUp = async (event) => {
    event.preventDefault()
    const provider = new FacebookAuthProvider()
    const response = await signInWithPopup(auth, provider)


    await setDoc(doc(db, 'users', response.user.uid), {
      uid: response.user.uid,
      displayName: response.user.displayName,
      email: response.user.email,
      photoURL: response.user.photoURL
    })
    await setDoc(doc(db, 'userChats', response.user.uid), {});
    // console.log(user.uid)
    setSignUpMode(false)

  }



  //handle tweeter sign up
  const handleTwitterSignUp = async () => {
    const provider = new TwitterAuthProvider()
    const response = await signInWithPopup(auth, provider)
    console.log('sign up with twitter')

    await setDoc(doc(db, 'users', response.user.uid), {
      uid: response.user.uid,
      displayName: response.user.displayName,
      email: response.user.email,
      photoURL: response.user.photoURL
    })
    await setDoc(doc(db, 'userChats', response.user.uid), {});
    setSignUpMode(false)
  }
  //handle linkedin sign up
  const handleAppleSignUp = async () => {
    const provider = new OAuthProvider('apple.com')
    const response = await signInWithPopup(auth, provider)
    await setDoc(doc(db, 'users', response.user.uid), {
      uid: response.user.uid,
      displayName: response.user.displayName,
      email: response.user.email,
      photoURL: response.user.photoURL
    })
    await setDoc(doc(db, 'userChats', response.user.uid), {});
    setSignUpMode(false)
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
      {isLoading ? (
        <Loader />
      ) : (

        <div className="all-container">
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
                    {/* <Link href="#" className="social-icon">
                  <i className="fab fa-apple"></i>
                </Link> */}
                  </div>
                </form>

                {/* to sign up mode from */}
                {/* <Formik  

          
          validationSchema={Schema}
          onSubmit={values => {
            console.log(values)
}}

> */}
                <form action="#" className="form sign-up-form" onSubmit={handleSignup}>
                  <h2 className="title">Sign up</h2>

                  <div className="input-field">
                    <i className="fas fa-user"></i>
                    <input
                      // value={username} 
                      name="username"
                      value={values.username || username}
                      onChange={({ target }) => { setUsername(target.value) }}
                      // onChange={handleChange}
                      type="text" placeholder="Username"
                      // onBlur={handleBlur}
                      required
                    />
                    {errors.username  && (
                      <small className="errorMessage">{errors.username}</small>
                    )}

                  </div>

                  <div className="input-field">
                    <i className="fas fa-envelope"></i>
                    <input value={values.email|| email}
                      name="email"
                      // onChange={handleChange}
                      onChange={({ target }) => { setEmail(target.value) }} 
                      type="email" placeholder="Email"
                      // onBlur={handleBlur}
                   required />
                    {errors.email &&  (
                      <small className="errorMessage">{errors.email}</small>
                    )}
                  </div>

                  <div className="input-field">
                    <i className="fas fa-lock"></i>
                    <input value={values.password || password}
                      name="password"
                      // onChange={handleChange}

                      onChange={(e)=>{
                        setPassword(e.target.value)
                      }}
                      // onBlur={handleBlur}
                      type="password" placeholder="Password" 
                      required/>
                    {errors.password &&  (
                      <small className="errorMessage">{errors.password}</small>
                    )}
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
                {/* </Formik> */}
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
        </div>
      )}
    </>
  );
}

export default Login;
