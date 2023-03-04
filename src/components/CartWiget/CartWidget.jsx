import React from "react";
import "./cartWidget.css";
import { BsFillCartFill } from "react-icons/bs";

const CartWidget = () => {
  return (
    <div className="cartWidget">
      <BsFillCartFill color="#e31515" size={24} />
      <span className="cartWiget__cant">3</span>
    </div>
  );
};

export default CartWidget;
