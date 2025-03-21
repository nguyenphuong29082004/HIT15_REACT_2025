import {React, useState} from "react";
import "./style.css"
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