import React, { useState } from "react";
import "./App.css";
import Home from "./components/week9/pages/home";
import New from "./components/week9/pages/new";
import Contact from "./components/week9/pages/contact";
import ProductList from "./components/week9/pages/ProductList";
import Product from "./components/week9/Product";
import Header from "./components/week9/pages/Header";
import Login from "./components/week7/login/login";
import ReactHookForm from "./components/week7/login/ReactHookForm";
import { Route, Routes, Link, useRoutes} from "react-router-dom";
function App() {  
  const elements = useRoutes([
    {
      path: "/",
      element: <Home/>,
      // children: [
      //   {
      //     path: "/product",
      //     element: <ProductList/>
      //   },
      //   {
      //     path: "/product/:productId",
      //     element: <Product/>
      //   }
      // ]
    }, 
    {
      path: "/news",
      element: <New/>,
      children: [
        {
          path: "product",
          element: <ProductList/>
        },
        {
          path: "/news/product/:productId",
          element: <Product/>
        }
      ]
    },
    {
      path: "/contact",
      element: <Contact/>
    },
    {
      element: <Header/>,
      children: [
        {
          path: "/product",
          element: <ProductList/>
        },
        {
          path: "/product/:productId",
          element: <Product/>
        }
      ]
    }
  ])
  return (
    <>
      {/* <Login/> */}
      {/* <ReactHookForm/> */}
      <div style={{padding: "20px"}}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/news">News</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/product">Product</Link></li>
        </ul>
      </div>
      {/* <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/news" element={<New/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route element={<Header/>}>
          <Route path="/product" element={<ProductList/>}></Route>
          <Route path="/product/:productId" element={<Product/>}></Route>
        </Route>
      </Routes> */}
      {elements}
      
      
    </>
  );
}

export default App;