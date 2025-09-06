import React, { createContext, useContext, useState } from 'react'
import Home from '../pages/home'
import New from '../pages/new'
import ProductList from '../pages/ProductList'
import Product from '../Product'
import Contact from '../pages/contact'
import Header from "../pages/Header"
import { Route, Routes, Link, useRoutes} from "react-router-dom";
import Content from '../pages/Content/Content'
import Paragraph from '../pages/Paragraph/Paragraph'
export const ThemeContext = React.createContext();

function main_week9() {
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
      ]);
      
      // const [theme, setTheme] = useState("dark");
      // const toggleTheme = () => {
      //   setTheme(theme === "dark" ? "light" : "dark" )
      // }

      const context = useContext()
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
      <div style={{padding: "20px"}} className='app'>
          <button onClick={toggleTheme}>Toggle theme</button>
          <Paragraph theme={theme}/>
      </div>

    {/* <ThemeContext.Provider value={theme}>
      <div style={{padding: "20px"}} className='app'>
          <button onClick={toggleTheme}>Toggle theme</button>
          <Paragraph theme={theme}/>
      </div>
    </ThemeContext.Provider> */}



    {/* <div style={{padding: "20px"}}>
        <button onClick={toggleTheme}>Toggle theme</button>
        <Content theme={theme}/>
    </div> */}
    {elements}
    
    
  </>
  )
}

export default main_week9