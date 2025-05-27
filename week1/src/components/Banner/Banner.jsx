import React from 'react'
import "./Banner.scss"
import imgBanner from "../../assets/Banner.png"
function Banner() {
  return (
    <div className='banner'>
        <div className="banner__left">
            <h1 className='banner__left__title'>Save your data storage here</h1>
            <p className="banner__left__paragraph">Data Warehouse is a data storage area that has been
                tested for security, so you can store your data here
                safely but not be afraid of being stolen by others. </p>
                <button>Learn more</button>
        </div>
        <div className="banner__right">
            <img src={imgBanner} alt="" />
        </div>
        

    </div>
  )
}

export default Banner