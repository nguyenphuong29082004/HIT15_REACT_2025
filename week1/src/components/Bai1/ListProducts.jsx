import React, { useState } from "react"
import { FaBox } from "react-icons/fa";
import "./style.css"
function ListProducts({onAddToCart}) {
  const products = [
    {
      id: 1,
      name: "IPhone 15",
      price: 25000000
    },
    {
      id: 2,
      name: "MacBook Air M2",
      price: 32000000
    },
    {
      id: 3,
      name: "Ipard Pro",
      price: 28000000
    },

  ];

  return (
    <>  
      <div className="container-products">
        <h3><FaBox className="icon-box" /> Danh sách sản phẩm </h3>
        <div>
            {/* <div>{props.name} - {props.price} VND</div> */}
            {products.map((item) => (
              <div key={item.id} className="row-product">
                <p>{item.name} - {item.price.toLocaleString()}</p>
                <button className="btnAddToCart" onClick={() => onAddToCart(item)}>Thêm giỏ hàng</button>
              </div>
            ))}
        </div>
      </div>
        
    </>
  )
}

export default ListProducts