import React, { useState } from "react";
import { Route } from "react-router-dom";
import Header from "./Header/Header";
import Header2 from "./Header/Header2";
import Product from "./Products/Product";
import "./styles.css";
import Cart from "./Cart/Cart";
import CartProvider from "./store/Cart-Provider";
import Home from "./Pages/Home";
import HomeHeader from "./Pages/HomeHeader";
import ContactUs from "./Pages/ContactUs";
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

      <Route path="/store">
        <Header2 />
        {showCart && <Cart onClose={hideCartHandler} />}

        <Product />
      </Route>
      <Route path="/about">
        <Header2 />
        <About />
      </Route>

      <Route path="/home">
        <HomeHeader />
        <Home />
      </Route>
      <Route path='/contact' >
            <Header2/>
             <ContactUs/>
            </Route> 
    </CartProvider>
  );
}
