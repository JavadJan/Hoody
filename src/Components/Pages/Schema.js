
import * as Yup from 'yup'

const passPattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
const emailPattern=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export const Schema = Yup.object().shape({

    username:Yup.string()
    .min(3,'Please enter your name')
    .max(15,'Must be less than 15 characters')
    .required('Username Required!'),
    email:Yup.string()
    .matches(emailPattern,"Email is Invalid")
    .required('Email Required!'),
    password:Yup.string()
    .min(6,'Password must be at least 6')
    .matches(passPattern,"Please create a strong password")
    .required('Password Required')
  })