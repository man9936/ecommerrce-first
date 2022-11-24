import React, { useState } from "react";
import Header from "./Header/Header";
import Header2 from "./Header/Header2";
import Product from "./Products/Product";
import "./styles.css";
import Cart from "./Cart/Cart";

export default function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart((prevShow) => !prevShow);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <div>
      <Header onShowCart={showCartHandler} />
      <Header2 />
      {showCart && <Cart onClose={hideCartHandler} />}
      {!showCart && <Product />}
    </div>
  );
}
