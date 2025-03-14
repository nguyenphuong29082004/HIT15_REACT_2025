import React from "react";
import "./Footer.css"
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function Footer(){
    return(
        <>
        <div className="footer-container">
            <div className="footer-top">
                <div className="footer-element1">
                    <a href="#"><span className="footer-title">Logis</span></a>
                    <p>Cras fermentum odio eu feugiat lide par naso tierra. Justo eget nada terra videa magna derita valies darta donna mare fermentum iaculis eu non diam phasellus.</p>
                    <div className="icon-media-container">
                        <div className="icon-media">
                            <FaXTwitter className="icon-media1"/>
                        </div>
                        <div className="icon-media">
                            <FaFacebook  className="icon-media1"/>
                        </div>
                        <div className="icon-media">
                            <FaInstagram className="icon-media1"/>
                        </div>
                        <div className="icon-media">
                            <FaLinkedin className="icon-media1"/>
                        </div>
                    </div>
                </div>

                <div className="footer-element2">
                    <div className="footer-userlink">
                        <h4>Userful Links </h4>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About us</a></li>
                            <li><a href="3">Services</a></li>
                            <li><a href="#">Terms of service</a></li>
                            <li><a href="#">Privacy policy</a></li>
                        </ul>
                    </div>
                    <div className="footer-sercices">
                        <h4>Our Services</h4>
                        <ul>
                            <li><a href="#">Web Design</a></li>
                            <li><a href="#">Web Development</a></li>
                            <li><a href="3">Product Management</a></li>
                            <li><a href="#">Marketing</a></li>
                            <li><a href="#">Graphic Design</a></li>
                        </ul>
                    </div>
                    <div className="footer-contact">
                        <h4>Contact Us</h4>
                        <div>
                            <p>A108 Adam Street</p>
                            <p>New York, NY 535022</p>
                            <p>United States</p>
                        </div>
                        <div>
                            <p>
                                <strong>Phong: </strong>
                                <span>+1 5589 55488 55</span>
                            </p>
                            <p>
                                <strong>Email: </strong>
                                <span>info@example.com</span>
                            </p>
                        </div>
                        
                    </div>
                </div>
               
            </div>
            <hr className="footer-gap"/>
            <div className="footer-right">
                <p>&copy; Copyright <strong>Logis</strong> All Rights Reserved</p>
                <p>Designed by BootstrapMade</p>
            </div>

        </div>
        </>
    )
}

export default Footer