import React, { useEffect, useRef, useState } from 'react'
// let timeId;
function Countdown({title}) {
    const[countdown, setCountdown] = useState(180);
    const timeId = useRef();
    const preCount = useRef();
    const h1Ref  = useRef(); // useRef tham chieu
    useEffect(() => {
        preCount.current = countdown;
    }, [countdown]);
    // useRef tra va mot cai objec va property la current
    // useEffect(()=>{
    //     const interval = setInterval(() => {
    //     setCountdown((prev) => prev -1);
    //     console.log("render");
    // },1000);
    //     return () => {
    //         clearInterval(interval);
    //     }
    // },[])

    // let timeId;
    
    const handleStart = () => {
        timeId.current = setInterval(() => {
            setCountdown((prev) => prev -1 );
        },1000);
        // console.log(preCount);
        console.log("Start -> ", timeId);
    };

    const handleStop = () => {
        clearInterval(timeId.current);
        console.log("End -> ", timeId);
    }
    console.log(countdown, preCount.current);
    
    useEffect(()=>{
        console.log(h1Ref.current);
    })
    console.log('gh',title)
  return (
    <div>
        <h1 ref={h1Ref}>{countdown}</h1>
        {/* <h1>{countdown}</h1> */}
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>End</button>
        <p>{title}</p>
    </div>
  )
}

export default Countdown


//react router
// contect
// react dusk
// Ant Design