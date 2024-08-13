import React, { useContext, useState } from 'react'
import './Siginup.css'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  
} from "firebase/auth";
import { auth } from "../compenets/firebase/firebase";
import { UserContext } from '../App';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
  const navigate=useNavigate()
  const [email, setemail]=useState('')
  const [password,setPassword]=useState('')
  
  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(
      auth,
      email,
      password
      
    )
      .then((authUser) => {
        console.log(authUser);
        
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const signIn = (e) => {
    e.preventDefault();
   
    signInWithEmailAndPassword(
      auth,
      email,
      password
    )
      .then((authUser) => {
       
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const val=useContext(UserContext)
   console.log(val)
 
  return (
    
  
      <div className='signupScreen'>
      <form >
        <h1>Sign In</h1>
        <input value={email} onChange={(e)=>setemail(e.target.value)}  placeholder="Email" type="email" />
        <input value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" type="password" />
        <button onClick={signIn} type="submit" >
          Sign In
        </button>

        <h4>
          <span className="signupScreen__gray">New to Netflix? </span>{" "}
          <span className="signupScreen__link" onClick={register} >
            Sign Up now
          </span>
        </h4>
      </form>
      </div>
   
 
  )
}

export default Signup