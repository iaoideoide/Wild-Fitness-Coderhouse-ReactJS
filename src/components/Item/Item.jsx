import React from "react";
import "./item.css";

const Item = ({ producto }) => {
  console.log(producto);
  return (
    <div className="item">
      <p>{producto.title}</p>
      <p>{producto.price}</p>
      <p>{producto.detail}</p>
    </div>
  );
};

export default Item;
