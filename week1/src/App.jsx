import React, { useState } from "react";
import "./App.css";
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