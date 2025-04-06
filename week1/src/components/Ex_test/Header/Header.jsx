import React, { useState } from 'react'
import "./Header.scss"
import Banner from '../Banner/Banner'

function Header({setAdd, children}) {
    
  return (
    <>
     <div className={`container-header ${setAdd ? "light" : 'dark'} `}>
        {/*=====================MENU > 575============= */}
        <div className={`menu ${setAdd ? "menu-light" : 'menu-dark'}`}>
            <p class={`menu__name ${setAdd ? "menu__name--light" : 'menu__name--dark'}`}>eNno</p>
            <ul className="menu__main">
                <li className="menu__item"><a className={`menu__link ${setAdd ? "menu__link--light" : 'menu__link--dark'}`} href="#">Home</a></li>
                <li className="menu__item"><a className={`menu__link ${setAdd ? "menu__link--light" : 'menu__link--dark'}`} href="#">About</a></li>
                <li className="menu__item"><a className={`menu__link ${setAdd ? "menu__link--light" : 'menu__link--dark'}`} href="#">Services</a></li>
                <li className="menu__item"><a className={`menu__link ${setAdd ? "menu__link--light" : 'menu__link--dark'}`} href="#">Protfolio</a></li>
                <li className="menu__item"><a className={`menu__link ${setAdd ? "menu__link--light" : 'menu__link--dark'}`} href="#">Team</a></li>
                <li className="menu__item menu__item--drop"><a className={`menu__link ${setAdd ? "menu__link--light" : 'menu__link--dark'}`} href="#">Dropdown</a>
                     <ul className="menu__sub-menu">
                        <li><a href="">Dropdown 1</a></li>
                        <li className="menu__main-second"><a href="">Deep Dropdown</a>
                            <ul className="menu__sub-menu-second">
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
                <li className="menu__item"><a className={`menu__link ${setAdd ? "menu__link--light" : 'menu__link--dark'}`} href="#">Contact</a></li>
                <li className={`menu__item menu__item--toggle ${setAdd ? "light" : "dark"}`}>
                    {children}
                </li>
            </ul>
        </div>
        {/* ===========END=========== */}

        <Banner setDark={setAdd}/>
        </div>
    </>
  )
}

export default Header