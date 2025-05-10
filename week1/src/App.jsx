import React, { useState } from "react";
import "./App.css";
import Demo_scss from './components/DemoScss';
import Header from "./components/Ex_test/Header/Header";
import IndexCs from "./components/Ex_test/ContentSession/IndexCs";
import About from "./components/Ex_test/About/About";
import Service from "./components/Ex_test/Service/Service";
import Footer from "./components/Ex_test/Footer/Footer";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import "./Responsive.scss"
function App() {  
  const [isOn, setIsOn] = useState(true);
    const handleEvent = () => {
        setIsOn(!isOn)
    }
    console.log(isOn);
    
  return (
    <>
      {/* <Demo_scss/> */}
      <div className={`${isOn ? "bgCl--light" : "bgCl--dark"}`}>
            <Header setAdd={isOn}>
            {isOn ? (

              <button className="menu__btn-light" onClick={handleEvent}>
                <CiLight className="menu__convert-light"/>
              </button>
            ): (
              <button className="menu__btn-dark" onClick={handleEvent}> 
                <CiDark className="menu__convert-dark"/>
              </button>

            )}
            </Header >
            <IndexCs setAdd={isOn}/>
            <About setAdd={isOn}/>
            <Service setAdd={isOn}/>
            <Footer setAdd={isOn}/>
      </div>
      
    </>
  );
}

export default App;