import { useState } from 'react';
import ListProducts from './components/Bai1/ListProducts';

function App() { 
  const products = [
    {
      name: "IPhone 15",
      price: "25,000,000 VND"
    },
    {
      name: "MacBook Air M2",
      price: "32,000,000 VND"
    },
    {
      name: "Ipard Pro",
      price: "28,000,000 VND"
    },

  ];
  // const [product, setProduct] = useState(producrs)
  // const [addProduct, setAddProduct] = useState({
  //   name: "",
  //   quantity: 1,
  // });
  
  // const addCart = () => {
  //   setPeoples([...peoples, people]);
  // }

  

  return (
    <>
      <h2>Danh sách sản phẩm</h2>
      {products.map((item,key) => (
        <ListProducts key={key} {...item}/>
      ))}
     
      
    </>
  );
}
//map co hai tham so 
// numArr.map(item, index) 
// index: chi so cac phan tu trong mang
export default App;
