
import React from "react";
import Login from "../Login/Login";
import Banner from "../Banner/Banner";
import Session from "../Session/Session";
import Describe from "../Describe/Describe";
import Review from "../Review/Review";
import Register from "../Register/Register";
import Footer from "../Footer/Footer";
import Register2 from "../Register2/Register2";
import Header from "../Header/Header";
import { Navigate } from "react-router-dom";

const routes = [
  {
    path: "/",
    element: <Navigate to="/login" replace />
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/home",
    element: (
      <>
        <Header/>
        <Banner/>
        <Session/>
        <Describe/>
        <Review/>
        <Register/>
        <Footer/>
      </>
    ),
  },
  
  {
    path: "/register2",
    element: <Register2/>
  },
];

export default routes;
