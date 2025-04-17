import React, { useState } from "react";
import "./App.css";

import "./Responsive.scss"
import Port2 from "./components/Port2/Port2";
import Countdown from "./components/Countdown/Countdown";
import Prop_demo from "./components/Prop_demo/Prop_demo";
import Order from "./components/order/order";
function App() {  
  const [isOn, setIsOn] = useState(true);
    const handleEvent = () => {
        setIsOn(!isOn)
    }
    console.log(isOn);
  const [display, setDisplay] = useState(false);
  return (
    <>
      {/* <Port2/> */}
      <button onClick={() => setDisplay(!display) }> Toggle</button>
      {/* {display && <Port2/>} */}
      {/* {display && <Countdown/>} */}

      <p>========================</p>
      <Prop_demo/>
      {/* <Countdown/> */}

      <Order/>
    </>
  );
}

export default App;