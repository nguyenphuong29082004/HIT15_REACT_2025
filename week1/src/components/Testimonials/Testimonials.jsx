import React from 'react'
import "./Testimonials.scss"
import ellipse from '../../assets/Ellipse.png'
function Testimonials() {
  return (
    <div className='testimonials'>
        <h1 className="testimonials__heading">Testimonials</h1>
        <div className="testimonials__bg">
            <div className="testimonials__img">
                <img src={ellipse} alt="" />
            </div>
            <div className="testimonials__left">
                <p className="testimonials__left__name">John Fang</p>
                <p className="testimonials__left__contact">wordfaang.com</p>
                <p className="testimonials__left__des">Suspendisse ultrices at diam lectus nullam. 
                Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla.</p>
            </div>
        </div>
    </div>
  )
}

export default Testimonials