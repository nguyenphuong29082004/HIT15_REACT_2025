import React, { useState } from "react";
import "./App.css";

import "./Responsive.scss"

import CrudProducts from "./components/week6/CrudProducts";
function App() {  
  const [isOn, setIsOn] = useState(true);
    const handleEvent = () => {
        setIsOn(!isOn)
    }
    console.log(isOn);
  const [display, setDisplay] = useState(false);
  return (
    <>
    {/* //   <Port2/>
    //   <button onClick={() => setDisplay(!display) }> Toggle</button> */}
      {/* {display && <Port2/>} */}
      {/* {display && <Countdown/>} */}

      {/* // <p>========================</p>
      // <Prop_demo/> */}
      {/* <Countdown/> */}

      {/* // <Order/> */}

      <CrudProducts/>

    </>
  );
}

export default App;