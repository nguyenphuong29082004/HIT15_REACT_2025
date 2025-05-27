import React from 'react'
import Header from './Header/Header'
import Banner from './Banner/Banner'
import Feature from './Feature/Feature'
import Testimonials from './Testimonials/Testimonials'
import Footer from './Footer/Footer'

function HomePage() {
  return (
    <div>
        <Header/>
        <Banner/>
        <Feature/>
        <Testimonials/>
        <Footer/> 
    </div>
  )
}

export default HomePage