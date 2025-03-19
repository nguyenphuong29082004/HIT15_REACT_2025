import React from "react"

import "./bai1.css"
function ListProducts(props) {
  return (
    <>  
        <div>
            <div>{props.name} - {props.price}</div>
            <button className="btnAdd">Thêm giỏ hàng</button>
        </div>
       
    </>
  )
}

export default ListProducts