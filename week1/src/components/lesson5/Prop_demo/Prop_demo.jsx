import React, { useState } from 'react'
import Countdown from '../Countdown/Countdown'
import Content2 from './Content2';

function Prop_demo() {
    const [counter, setCounter] = useState(0);
    const handleCounter = () => {
        setCounter(counter +1);
    }
    
  return (
    <div>
        Prop_demo
        {/* <Countdown title="Hallooo" onIncrease={handleCounter}/> */}
        <Content2 count="counter" />
        <p>{counter}</p>
        <button onClick={handleCounter}>Increase</button>
    </div>
    
  )
}

export default Prop_demo