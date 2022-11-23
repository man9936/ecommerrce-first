import React from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

export default function HeaderCartButton() {
  return (
    <div>
      <button className={classes.button}>
        <span className={classes.icon}>
          <CartIcon />
          <span>Cart</span>
        </span>
      </button>
    </div>
  );
}
