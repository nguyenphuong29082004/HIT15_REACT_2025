import { useState } from 'react';
import ListProducts from './components/Bai1/ListProducts';
import Cart from './components/Bai1/Cart';
import TableData from './components/Bai2';
import BtnToggle from './components/Bai3';


function App() { 
  
  const [cart, setCart] = useState([]); // Trạng thái giỏ hàng
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };
  const increaseQuantity = (product) => {
    setCart((prevCart) =>
      prevCart.map(
        (item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 } // Tăng số lượng nếu `id` trùng
            : item // Giữ nguyên các sản phẩm khác
      )
    );
  };
  const decreaseQuantity = (product) => {
    setCart(
      (prevCart) =>
        prevCart
          .map(
            (item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity - 1 } // Giảm số lượng nếu `id` trùng
                : item // Giữ nguyên các sản phẩm khác
          )
          .filter((item) => item.quantity > 0) // Loại bỏ sản phẩm có `quantity` <= 0
    );
  };
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <>
      <h1>Bài 1</h1>
      <div className="title">Giỏ hàng sản phẩm ({totalQuantity} sản phẩm) </div>
      <div>
        <ListProducts onAddToCart={addToCart} />
      </div>
      <div>
        <Cart
          cart={cart}
          onIncrease={increaseQuantity}
          onDecrease={decreaseQuantity}
        />
      </div>

      <h2>Bài 2</h2>
      <div>
        <TableData />
      </div>

      <h2>Bài 3</h2>
      <div>
        <BtnToggle />
      </div>
    </>
  );
}
export default App;
