import React from 'react'
import imgHeader from "../../assets/Logo.png"
import "./Header.scss"
import { useNavigate } from 'react-router-dom'
function Header() {
  const navigate = useNavigate()
  const logOut = () => {
    localStorage.removeItem("token")
    location.reload()
    
  }
  return (
    <div className='header'>
        <div className="img">
            <img src={imgHeader} alt="" />
        </div>
        { 
        !localStorage.getItem("token")?(
        <button onClick={() => navigate("/signIn")}>Sign in</button> ):(
        <>
        <div>
          <button onClick={() => navigate("/profile")}>Profile</button>
          <button onClick={() => logOut() } className='btnLogOut'>Log out</button>
        </div>
          
        </>
        
        )

        }
    </div>
  )
}

export default Header