import React from "react";
import img from "../../assets/mancuernas.jfif";
import "./itemDetailContainer.css";
import Counter from "../Counter/Counter";

const ItemDetailContainer = () => {
  let producto = {
    id: 1,
    title: "mancuernas",
    price: 1500,
    detail: "mancuernas de 2.5 a 25 kg",
    pictureUrl: img,
  };
  return (
    <div className="itemDetailContainer">
      <div className="itemDetailContainer__container">
        <img src={img} alt="imagen producto" />
        <h1>{producto.title}</h1>
        <h2>{producto.detail}</h2>
        <h2>{producto.price}</h2>
        <Counter />
      </div>
    </div>
  );
};

export default ItemDetailContainer;
