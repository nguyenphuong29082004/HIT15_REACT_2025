import React from "react";
import Banner from "../Banner/Banner";
import "./Header.css";

function Header (){
    return(
    <>
    <div className="container">


        {/*=====================MENU > 575============= */}
        <div className="menu">
            <p class="login">Logis</p>
            <ul className="main-menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Dropdown</a>
                    <ul className="sub-menu">
                        <li><a href="">Dropdown 1</a></li>
                        <li className="main-menu-second"><a href="">Deep Dropdown</a>
                            <ul className="sub-menu-second">
                                <li><a href="">Deep Dropdown 1</a></li>
                                <li><a href="">Deep Dropdown 2</a></li>
                                <li><a href="">Deep Dropdown 3</a></li>
                                <li><a href="">Deep Dropdown 4</a></li>
                                <li><a href="">Deep Dropdown 5</a></li>
                            </ul>
                        </li>
                        <li><a href="">Dropdown 2</a></li>
                        <li><a href="">Dropdown 3</a></li>
                        <li><a href="">Dropdown 4</a></li>
                    </ul>
                </li>
                <li><a href="#">Contact</a></li>
                <li  class="listDrop1"><a href="#">Get a Quote</a></li>
            </ul>
        </div>
        {/* ===========END=========== */}

        {/* =========MENU PHONE======== */}
        <div className="navigation-phone">
            <div className="menuToggle">
                <p class="login">Logis</p>
                <p class="listDrop1"><a href="#">Get a Quote</a></p>
                <div className="demo">
                    <input type="checkbox" name="" id="" />
                    <span></span>
                    <span></span>
                    <span></span>
                    <div class="overlay"></div>
                    <div className="main-menu-phone">
                        <ul className="sub-menu-phone">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Dropdown</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
        {/* ===========ENDEND============= */}

        <Banner></Banner>
    </div>
    </>
);
}

export default Header
