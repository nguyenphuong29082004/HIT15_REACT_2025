import React from 'react'
import "./Footer.scss"
import { RxChevronRight } from "react-icons/rx";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function Footer({setAdd}) {
  return (
    <div className='footer'>
            <div className={`footer__above ${setAdd ? "footer__above--light" : "footer__above--dark"}`}>
            <div className="footer__left">
                <a className={`footer__name ${setAdd ? "footer__name--light" : "footer__name--dark"}`} href='#'>eNno</ a>
                <div className={`footer__address ${setAdd ? "footer__address--light" : "footer__address--dark"}`}>
                    <div className="footer__street">A108 Adam Street</div>
                    <div className="footer__house">New York, NY 535022</div>
                </div>
                <div className={`footer__contact ${setAdd ? "footer__contact--light" : "footer__contact--dark"}`}>
                    <div className="footer__phone"><strong>Phone: </strong> <span>+1 5589 55488 55</span></div>
                    <div className="footer__email"><strong>Email: </strong> <span>info@example.com</span></div>
                </div>
            </div>
            {/* <div className={`footer__right ${setAdd ? "footer__right--light" : "footer__right--dark"}`}> */}
                <div className="footer__userfuls">
                    <h4 className='footer__h4'>Useful Links</h4>
                    <ul className='footer__list'>
                        <li>
                            <RxChevronRight className="footer__icon"/>
                            <a href="#" className='footer__link' >Home</a>
                        </li>
                        <li>
                            <RxChevronRight className="footer__icon"/>
                            <a href="#" className='footer__link' >About us</a>
                        </li>
                        <li>
                            <RxChevronRight className="footer__icon"/>
                            <a href="#" className='footer__link' >Service</a>
                        </li>
                        <li>
                            <RxChevronRight className="footer__icon"/>
                            <a href="#" className='footer__link' >Terms of service</a>
                        </li>
                    </ul>
                </div>
                <div className="footer__services">
                    <h4 className='footer__h4'>Our Services</h4>
                    <ul className='footer__list'>
                        <li>
                            <RxChevronRight className="footer__icon"/>
                            <a href="#" className='footer__link' >Web Design</a>
                        </li>
                        <li>
                            <RxChevronRight className="footer__icon"/>
                            <a href="#" className='footer__link' >Web Development</a>
                        </li>
                        <li>
                            <RxChevronRight className="footer__icon"/>
                            <a href="#" className='footer__link' >Product Management</a>
                        </li>
                        <li>
                            <RxChevronRight className="footer__icon"/>
                            <a href="#" className='footer__link' >Marketing</a>
                        </li>
                    </ul>
                </div>
                <div className="footer__follow">
                    <h4 className='footer__h4'>Follow Us</h4>
                    <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
                    <div className="footer__follow-icon">
                        <a href="#"><FaXTwitter/></a>
                        <a href="#"><FaFacebook/></a>
                        <a href="#"><FaInstagram/></a>
                        <a href="#"><FaLinkedin/></a>
                    </div>
                </div>
            {/* </div> */}
        </div>
        <hr className='footer__gap'/>
        <div className={`footer__under ${setAdd ? "footer__under--light" : "footer__under--dark"}`}>
            <p>&copy;<span>Copyright</span> <strong>eNno</strong> <span>All Rights Reserved</span></p>
            <div className="footer__credits">
                <span>Design by</span> <a href="https://bootstrapmade.com/">BoostrapMade</a>
            </div>

        </div>
    </div>
  )
}

export default Footer