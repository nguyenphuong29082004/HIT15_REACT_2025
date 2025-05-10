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
                     <ul className={`menu__sub-menu ${setAdd ? "menu__sub-menu--light" : 'menu__sub-menu--dark'}`}>
                        <li><a href="">Dropdown 1</a></li>
                        <li className="menu__main-second"><a href="">Deep Dropdown</a>
                            <ul className={`menu__sub-menu-second ${setAdd ? "menu__sub-menu-second--light" : 'menu__sub-menu-second--dark'}`}>
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
        </div>
        {/* ===========END=========== */}


         {/* ================MENU PHONE=========================== */}
        <div className={`container-header-phone ${setAdd ? "container-header-phone--light" : 'container-header-phone--dark'} `}>
        <div className={`menu-phone ${setAdd ? "menu-phone__light" : 'menu-phone__dark'}`}>
            <p class={`menu-phone__name-phone ${setAdd ? "menu-phone__name--light" : 'menu-phone__name--dark'}`}>eNno</p>
            <div className={`menu-phone__right ${setAdd ? "menu-phone__right--light" : 'menu-phone__right--dark'}`}>
                <div className={`menu-phone__item-phone menu-phone__item-phone--toggle ${setAdd ? "light" : "dark"}`}>
                    {children}
                </div>
                <div className='menu_ht'>
                    <input type="checkbox" id="toggle" />
                    <div className="menu-phone__span">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div class="overlay"></div>
                    <ul className={`menu-phone__main-phone ${setAdd ? "menu-phone__main-phone--light" : 'menu-phone__main-phone--dark'}`}>
                        <li className="menu-phone__item-phone"><a className={`menu-phone__link-phone ${setAdd ? "menu-phone__link--light" : 'menu-phone__link--dark'}`} href="#">Home</a></li>
                        <li className="menu-phone__item-phone"><a className={`menu-phone__link-phone ${setAdd ? "menu-phone__link--light" : 'menu-phone__link--dark'}`} href="#">About</a></li>
                        <li className="menu-phone__item-phone"><a className={`menu-phone__link-phone ${setAdd ? "menu-phone__link--light" : 'menu-phone__link--dark'}`} href="#">Services</a></li>
                        <li className="menu-phone__item-phone"><a className={`menu-phone__link-phone ${setAdd ? "menu-phone__link--light" : 'menu-phone__link--dark'}`} href="#">Protfolio</a></li>
                        <li className="menu-phone__item-phone"><a className={`menu-phone__link-phone ${setAdd ? "menu-phone__link--light" : 'menu-phone__link--dark'}`} href="#">Team</a></li>
                        <li className="menu-phone__item-phone"><a className={`menu-phone__link-phone ${setAdd ? "menu-phone__link--light" : 'menu-phone__link--dark'}`} href="#">Dropdown</a></li>
                        <li className="menu-phone__item-phone"><a className={`menu-phone__link-phone ${setAdd ? "menu-phone__link--light" : 'menu-phone__link--dark'}`} href="#">Contact</a></li>
                    </ul>
                </div>

                
            </div>
        </div>
        </div>
        <Banner setDark={setAdd}/>
    </>
  )
}

export default Header