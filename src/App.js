import React, { useState } from "react";
import { Route } from "react-router-dom";
import Header from "./Header/Header";
import Header2 from "./Header/Header2";
import Product from "./Products/Product";
import "./styles.css";
import Cart from "./Cart/Cart";
import CartProvider from "./store/Cart-Provider";

import About from "./Pages/About";

export default function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart((prevShow) => !prevShow);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <CartProvider>
      <Header onShowCart={showCartHandler} />
      <Header2 />
      {showCart && <Cart onClose={hideCartHandler} />}
      <Route path="/store">
        <Product />
      </Route>

      <Route path="/about">
        <About />
      </Route>
    </CartProvider>
  );
}
