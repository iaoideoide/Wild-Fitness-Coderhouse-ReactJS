import React from "react";
import "./cartWidget.css";
import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <Link to={`/cart`}>
      <div className="cartWidget">
        <BsFillCartFill color="#e31515" size={24} />
        <span className="cartWiget__cant">3</span>
      </div>
    </Link>
  );
};

export default CartWidget;
