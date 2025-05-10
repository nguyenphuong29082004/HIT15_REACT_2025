import React from 'react'
import "./Banner.scss"
import BannerImage from "../../../assets/ex_week4.png"

function Banner({setDark}) {
  return (
    <>
     <div className={`banner ${setDark ? "banner--light" : 'banner--dark'}`}>
        <div className="banner__section banner__section--left">
            <h2 className={`banner__title ${setDark ? "banner__title--light" : 'banner__title--dark'}`}>Elegant and creative solutions</h2>
            <p className={`banner__description ${setDark ? "banner__description--light" : 'banner__description--dark'}`}>We are a team of talented designers making websites with Bootstrap</p>
            <div className="banner__button">
                <a className="banner__button banner__button--started">Get Started</a>
                <div className="banner__button banner__button--video"></div>
            </div>
        </div>
        <div className="banner__section banner__section--right">
            <div className="banner__image-wrapper">
                <img src={BannerImage} alt="Banner" className="banner__image"/>
            </div>
        </div>
    </div>

    </>    
)
}

export default Banner