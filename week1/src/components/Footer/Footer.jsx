import React from 'react'
import "./Footer.scss"
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <div className='footer'>
        <div className="footer__menu">
          <ul>
            <li><a href="#">About us</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Login</a></li>
            <li><a href="#">Signup</a></li>
          </ul>
          <p>&copy; Your Website 2023. All Rights Reserved</p>
        </div>

        <div className="footer__social">
          <FaFacebook className='footer__social--icon'/>
          <FaTwitter className='footer__social--icon'/>
          <FaInstagram className='footer__social--icon'/>
        </div>
    </div>
  )
}

export default Footer