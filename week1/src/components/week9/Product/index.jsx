import React from 'react'
import { Link, useParams } from "react-router-dom";

function Product() {
    const { productId } = useParams();
    // const navigate = useNavigate();
  return (
    <>
     <div>Nội dung của product {productId}</div>
     {/* <div onClick={() => navigate('/about')}>About</div> */}
    </>
  )
}

export default Product