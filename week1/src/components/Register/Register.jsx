import React from 'react'
import "./register.scss"
import { Link } from "react-router-dom";
function Register() {
  return (
    <div className='register'>
        <h1 className='register__h1'>Ready to get started? Sign up now!</h1>
        <button className='register__btn'> <Link to="/register2">Register</Link></button>
    </div>
  )
}

export default Register