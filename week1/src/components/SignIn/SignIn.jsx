import React, { useState } from 'react'
import axios from "axios"
import "./SignIn.scss"
import { useNavigate } from 'react-router-dom'
function SignIn() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const signIn = async(email, password)=>{
    try {
      const res = await axios.post('https://reqres.in/api/login', {email, password}, {
        headers:{
          'x-api-key':'reqres-free-v1'
        }
      })
      console.log(email, password)
      console.log(res) 
      if(res.status == 200){
        localStorage.setItem("token",res.data.token)
        navigate("/home")
      }
      
    } catch (error) {
      console.log(error)
    }
  } 

  return (
    <div className='wrap_signIn'>
        <div className='signIn'>
            <h1>Sign In</h1>
            <div>
                <label className="username">Email</label> <br />
                <input type="text"  className='input_signUp' onChange={(e)=> setEmail(e.target.value)}  />
            </div>
            <div>
              <label className="username">Password</label> <br />
              <input type="text" className='input_signUp' onChange={(e) => setPassword(e.target.value)} />
            </div>
            
            <button className='btn_signUp' onClick={() => signIn(email, password)}>Sign In</button>
        </div>

    </div>
    
  )
}

export default SignIn