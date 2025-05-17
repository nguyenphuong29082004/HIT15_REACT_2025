import React from 'react'
import "./Session.scss"
import { FaRegWindowMaximize } from "react-icons/fa";
import { FaLayerGroup } from "react-icons/fa";
import { FaTerminal } from "react-icons/fa";

function Session() {
  return (
    <div className='session'>
        <div className="session__item">
            <div className="session__item__icon"><FaRegWindowMaximize className='icon2'/></div>
            <h1 className="session__item__title">Fully Responsive</h1>
            <div className="session__item__des">This theme will look great on any device, no matter the size!</div>
        </div>
        <div className="session__item">
            <div className="session__item__icon"> <FaLayerGroup/></div>
            <h1 className="session__item__title">Bootstrap 5 Ready</h1>
            <div className="session__item__des">Featuring the latest build of the new Bootstrap 5 framework!</div>
        </div>
        <div className="session__item">
            <div className="session__item__icon"><FaTerminal/></div>
            <h1 className="session__item__title">Easy to Use</h1>
            <div className="session__item__des">Ready to use with your own content, or customize the source files!</div>
        </div>
    </div>
  )
}

export default Session
