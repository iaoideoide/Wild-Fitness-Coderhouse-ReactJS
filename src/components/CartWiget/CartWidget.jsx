import React from "react";
import "./cartWidget.css";
import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useContext } from "react";
import cartContext from "../../context/cartContext";

const CartWidget = () => {
  const { getCountInCart } = useContext(cartContext);

  return (
    <Link to={`/cart`}>
      <div className="cartWidget">
        <BsFillCartFill color="#e31515" size={24} />
        <span className="cartWiget__cant">{getCountInCart()}</span>
      </div>
    </Link>
  );
};

export default CartWidget;
