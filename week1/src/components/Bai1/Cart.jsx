import React, { useState } from "react"
import { FaShoppingBag } from "react-icons/fa";
import "./style.css"


const Cart = ({ cart, onIncrease, onDecrease}) => {
  return (
    <>
      
      {cart.length === 0 ? (
        <p>Giỏ hàng trống...</p>
      ) : (
        <>
         <div className="container-cart">
        <h3 className="title-cart"> <FaShoppingBag className="icon-bag"/> Giỏ hàng</h3>
        {cart.map((item) => (
          <div key={item.id} className="row-cart">
            <p>  {item.name} - {item.quantity} sản phẩm </p>
            <div>
              <button className="btnAddProduct" onClick={() => onIncrease(item)}> + </button>
            <button className="btnDeProduct" onClick={() => onDecrease(item)}> - </button>
            </div>
          </div>
        ))}
        </div>
        </>
      )}
      
    </>
  );
};
export default Cart