// import React from "react";

import { useState } from "react";
const Counter = (props) => {
    const [counter, setCounter] = useState(1);

    const handleCounter = () => {
        setCounter(counter +1 );
    }
    const cong3 = () => {
        setCounter(prev => (prev +1 ) );
        setCounter(prev => (prev +1 ) );
        setCounter(prev => (prev +1 ) );
    }
    const tru = () =>{
        setCounter(counter - 1);
    }
    const chia = () =>{
        setCounter(counter / 3);
    }
    const nhan = () =>{
        setCounter(counter * 3);
    }
    // console.log(counter);
    return (
        
        <div className="counter" >
            <p>Hello {props.title} </p>
            <h1 style={{marginLeft: "12px"}}>{counter}</h1>
            {/* <h1>{JSON.stringify(counter)}</h1> */}
            <button onClick={handleCounter} style={{marginLeft: "12px"}}>Tang</button>
            <button onClick={tru} style={{marginLeft: "12px"}}>Tru</button>
            <button onClick={chia} style={{marginLeft: "12px"}}>Chia</button>
            <button onClick={nhan} style={{marginLeft: "12px"}}>Nhan</button>
            <button onClick={cong3} style={{marginLeft: "12px"}}>Cong 3</button>
        </div>
    )
}
export default Counter
