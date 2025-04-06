import React from 'react'
import AboutImage from "../../../assets/about_ex_week4.png"
import "./About.scss"
import { BsCheck2All } from "react-icons/bs";
function About({setAdd}) {
  return (
    <div className='about'>
        <div className="about__container">
            <h2 className={`about__title ${setAdd ? "about__title--light" : "about__title--dark"}`}>ABOUT</h2>
            <p className={`about__subtitle ${setAdd ? "about__subtitle--light" : "about__subtitle--dark"}`}>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            <div className="about__content">
                <div className="about__left">
                    <img src={AboutImage} alt="About Image" className='about__image'/>
                </div>
                <div className={`about__right ${setAdd ? "about__right--light" : "about__right--dark"}`}>
                    <h3 className="about-text">Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                    <p className="text-italic">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <ul>
                        <li>
                            <BsCheck2All className='icon-about'/>
                            <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                        </li>
                        <li>
                            <BsCheck2All className='icon-about'/>
                            <span>Duis aute irure dolor in reprehenderit in voluptate velit.</span>
                        </li>
                        <li>
                            <BsCheck2All className='icon-about'/>
                            <span>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</span>
                        </li>
                    </ul>
                    <p>
                        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
                    </p>
                </div>
            </div>
            <div className={`about__data ${setAdd ? "about__data--light" : "about__data--dark"}`}>
                <div className="about__item">
                    <div className="about__number">232</div>
                    <div className="about__label">Clients</div>
                </div>
                <div className="about__item">
                    <div className="about__number">521</div>
                    <div className="about__label">Projects</div>
                </div>
                <div className="about__item">
                    <div className="about__number">1453</div>
                    <div className="about__label">Hours Of Support</div>
                </div>
                <div className="about__item">
                    <div className="about__number">32</div>
                    <div className="about__label">Workers</div>
                </div>
            </div>
        </div>
    </div>
        
  )
}

export default About