// import React from "react";
// import "./style.scss"
// import avatar from "../../assets/react.svg"

// const Demo_scss = () => {
//     return (
//         <>
//         <div className="main-container">
//         <div class="test-container">
//                 <div className="test-containter__image">
//                     <img src={avatar} alt="" />
//                 </div>
//                 <h2 className="test-container__name">John Doe</h2>
//                 <h4 className="test-container__title">Frontend Developer | React Enthusiast</h4>
//                 <div className="test-container__button">
//                     <button className="test-container__button test-container__button--follow">Follow</button>
//                     <button className="test-container__button test-container__button--message">Message</button>
//                 </div>
//             </div>
//         </div>
            
            
//         </>
//     );
// };

// export default Demo_scss;

import {React, useState} from "react";
import "./style.scss"
const BtnToggle = () => {
    const [isOn, setIsOn] = useState(false);
    const handleEvent = () => {
        setIsOn(!isOn)
    }
    // console.log(isOn);
    
    return (
        <>
        <div className={`container-toggle ${isOn ? "on" : "off"}`} >
            <p className="text"> {isOn ? "ON" : "OFF"}</p>
            <div className="btn-toggle" onClick={handleEvent}></div>
        </div>


        </>
    )
}
export default BtnToggle