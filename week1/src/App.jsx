import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Banner from "./components/Banner/Banner";
import Session from "./components/Session/Session";
import Describe from "./components/Describe/Describe";
import Review from "./components/Review/Review";
import Footer from "./components/Footer/Footer";
import Register from "./components/Register/Register";
import {useRoutes} from "react-router-dom";
import routes from "./components/Router/Router";
function App() {  
  const routing = useRoutes(routes);
  return (
    <div className="main">
    {/* <Header />
    <Banner/>
    <Session/>
    <Describe/>
    <Review/>
    <Register/>
    <Footer/> */}
    {routing}
    </div>
  );
}

export default App;