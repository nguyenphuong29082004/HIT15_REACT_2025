import React, { useState } from "react"

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
          <h2>Danh sách sản phẩm </h2>
        <div>
            {/* <div>{props.name} - {props.price} VND</div> */}
            {products.map((item) => (
              <div key={item.id}>
                  {item.name} - {item.price.toLocaleString()} x {item.quantity}
                  <button className="btnAddToCart" onClick={() => onAddToCart(item)}>Thêm giỏ hàng</button>
              </div>
            ))}
          
        </div>
    </>
  )
}

export default ListProducts