import React from 'react'
import imgLogo from "../../assets/Logo.png"
import "./Footer.scss"
function Footer() {
  return (
    <div className='footer'>
        <div className='footer__above'>
            <div className="footer__item">
                <div className="logo">
                    <img src={imgLogo} alt="" />
                    <span className='footer__name'>DataWarehouse</span>
                </div>
                
                <ul>
                <li style={{ color: "#212353", fontWeight: "400" }}>Warehouse Society, 234</li>
                    <li style={{ color: "#212353", fontWeight: "400", marginBottom: "12px" }}>Balagia Ave Street PRBW 29281</li>
                    <li>info@warehouse.project</li>
                    <li>1-232-3434 (Main)</li>
                </ul>
            </div>
            <div className="footer__item">
                <p>About</p>
                <ul>
                    <li>Profile</li>
                    <li>Features</li>
                    <li>Careers</li>
                    <li>DW News</li>
                </ul>
            </div>
            <div className="footer__item">
                <p>Help</p>
                <ul>
                    <li>Support</li>
                    <li>Sign up</li>
                    <li>Guide</li>
                    <li>Reports</li>
                    <li>Q&A</li>
                </ul>
            </div>
            <div className="footer__item">
                <p>Social Media</p>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer