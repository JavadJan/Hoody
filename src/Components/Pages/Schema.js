
// import * as Yup from 'yup'



export const Schema=(values)=>{


    const passPattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
  const emailPattern=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
    let errors={}
    if(!values.username){
      errors.username="Name required!!"
    }else if(values.username.length<3){
      errors.username="Name is so short"
    }else if(values.username.length>15){
      errors.username="Must be less than 15 characters"
    }
  
    if(!values.email){
      errors.email="Email required!!"
    }
    // else if(values.email.match(emailPattern)=false){
    //   errors.email="Wrong Email"
    // }
  
    if(!values.password){
      errors.password="Email required!!"
    // }else if(values.email.match(passPattern)=false){
    //   errors.password="Wrong password"
    // }
  
    return errors;
  
  
}}


// export const Schema = Yup.object().shape({

//     username:Yup.string()
//     .min(3,'Please enter your name')
//     .max(15,'Must be less than 15 characters')
//     .required('Username Required!'),
//     email:Yup.string()
//     .matches(emailPattern,"Email is Invalid")
//     .required('Email Required!'),
//     password:Yup.string()
//     .min(6,'Password must be at least 6')
//     .matches(passPattern,"Please create a strong password")
//     .required('Password Required')
//   })