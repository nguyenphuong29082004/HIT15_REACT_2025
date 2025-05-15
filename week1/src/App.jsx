import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Banner from "./components/Banner/Banner";
import Session from "./components/Session/Session";
import Describe from "./components/Describe/Describe";
import Review from "./components/Review/Review";
import Footer from "./components/Footer/Footer";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import Register2 from "./components/Register2/Register2";
function App() {  
  return (
    <div className="main">
    {/* <Header/>
    <Banner/>
    <Session/>
    <Describe/>
    <Review/>
    <Register/>
    <Footer/> */}
    <Login/>
    {/* <Register2/> */}
    </div>
  );
}

export default App;