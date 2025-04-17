import React, { useRef, useState } from 'react'

function Order() {
    const [name,setName] = useState("");
    const [price, setPrice] = useState("");
    const [product, setProduct] = useState([]);
    const handleSubmit = () => {
        setProduct([...product, {name, price:parseInt(price)}]);
        setName("");
        setPrice("");
        nameRef.current.focus();
    }
    const nameRef = useRef();
    // const priceRef = useRef();
    const total = product.reduce((result,prod) => result+prod.price, 0);
    console.log(product);
  return (
    <div>
        <input value={name} ref={nameRef} placeholder='Nhap ten...'
        onChange={(e) => setName(e.target.value)} /> <br />
        <input value={price} ref={nameRef} placeholder='Nhap gia...'
        onChange={(e) => setPrice(e.target.value)} /> <br />
        <button onClick={handleSubmit}>Add</button>
        <p>Total: {total}</p>
        <ul>
            {product.map((item,key) => (
                
                <li key={key}>
                    {item.name} - {item.price}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Order