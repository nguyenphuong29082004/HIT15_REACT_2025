import React from 'react'
import "./Describe.scss"
import imgItem1 from "../../assets/bg-showcase-1-DKDWhlFr.jpg"
import imgItem2 from "../../assets/bg-showcase-2-C7T817Rj.jpg"
import imgItem3 from '../../assets/bg-showcase-3-fvuC94nJ.jpg'
function Describe() {
  return (
    
    <div className='describe'>
        <div className="describe--item">
            <div className='describe--item__left'>
            <h1 className="describe--item__left__title">Fully Responsive Design</h1>
            <p className="describe--item__left__showCase">
                When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!
            </p>
            </div>
            <div className="describe--item__right">
                <img src={imgItem1} alt="img-item1" />
            </div>
        </div>
        
        <div className="describe--item">
            <div className="describe--item__right">
                <img src={imgItem2} alt="img-item1" />
            </div>
            <div className='describe--item__left'>
                <h1 className="describe--item__left__title">Updated For Bootstrap 5</h1>
                <p className="describe--item__left__showCase">
                Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!
                </p>
            </div>
        </div>

        <div className="describe--item">
            <div className='describe--item__left'>
            <h1 className="describe--item__left__title">Easy to Use & Customize</h1>
            <p className="describe--item__left__showCase">
            Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!
            </p>
            </div>
            <div className="describe--item__right">
                <img src={imgItem3} alt="img-item1" />
            </div>
        </div>
        
    </div>
  )
}

export default Describe