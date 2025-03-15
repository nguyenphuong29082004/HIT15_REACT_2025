import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

import Header from './components/Header/Header';
import ContentSession from "./components/ContentSession/ContentSession"
import AboutUs from "./components/AboutUs/AboutUs"
import Footer from "./components/Footer/Footer"
import "./components/responsive.css"
function App() {
  return (
    <>
      <Header></Header>
      <ContentSession></ContentSession>
      <AboutUs></AboutUs>
      <Footer></Footer>
    </>
  );
}

export default App;
