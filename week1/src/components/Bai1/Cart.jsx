import React, { useState } from "react"

import "./style.css"


const Cart = ({ cart, onIncrease, onDecrease}) => {
  return (
    <>
      <h2>Giỏ hàng</h2>
      {cart.length === 0 ? (
        <p>Giỏ hàng trống</p>
      ) : (
        cart.map((item) => (
          <div key={item.id}>
            {item.name} - {item.price.toLocaleString()} VND x {item.quantity}
             <button className="btnAddProduct" onClick={() => onIncrease(item)}> + </button>
            <button className="btnDeProduct" onClick={() => onDecrease(item)}> - </button>
          </div>
        ))
      )}
    </>
  );
};
export default Cart