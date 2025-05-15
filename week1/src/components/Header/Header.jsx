import React from 'react'
import "./Header.scss"
import { Link } from "react-router-dom";
function Header() {
  return (
    <div>
        <div className='header'>
            <a href="#" className='name'>Start Boostrap</a>
            <button className='btnLogin'><Link to="/login">Login</Link></button>
        </div>
    </div>
  )
}
 
export default Header