import React from "react";
import "./Banner.css"
import heroImg from "../../assets/hero-img.svg";
function Banner(){
    return(
    <>
    <div className="banner">
        <div className="banner-left">
            <h2>Your Lightning Fast Delivery<br /> Partner</h2>
            <p className="title">Facere distinctio molestiae nisi fugit tenetur repellat non praesentium nesciunt optio quis sit odio nemo quisquam. eius quos reiciendis eum vel eum voluptatem eum maiores eaque id optio ullam occaecati odio est possimus vel reprehenderit</p>
            <form action="#" className="input-search">
                <input type="text" name="search" id="search" className="search" placeholder="Your ZIP code or City e.g.New York"/>
                <input type="button" value="Search" className="btn-search" />
            </form>
            <div className="data">
                <div className="data-element">
                    <p className="data-number">232</p>
                    <p className="data-title">Clients</p>
                </div>
                <div className="data-element">
                    <p className="data-number">521</p>
                    <p className="data-title">Projects</p>
                </div>
                <div className="data-element">
                    <p className="data-number">1453</p>
                    <p className="data-title">Support</p>
                </div>
                <div className="data-element">
                    <p className="data-number">32</p>
                    <p className="data-title">Workers</p>
                </div>
            </div>
        </div>
        <div className="banner-right">
            <div className="banner-img">
                <img src={heroImg} alt="" />
            </div>
        </div>
    </div>
    </>
    )
   
}
export default Banner