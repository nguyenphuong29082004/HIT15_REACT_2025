import React, { useState } from "react";
import "./App.css";
import { useRoutes } from "react-router-dom";
import routes from "./components/Router/router";
import "./Responsive.scss"
import Profile from "./components/Profile/Profile";

function App() {  
  const routing = useRoutes(routes)
  return (
    <div>
      {routing}
      {/* <Profile/> */}
    </div>
  );
}

export default App;