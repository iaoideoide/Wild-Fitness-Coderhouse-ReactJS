import React from "react";
import "./item.css";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  console.log(producto);
  return (
    <Link to={`/detail/${producto.id}`}>
      <div className="item">
        <img src={producto.pictureUrl} alt="imagen producto" />
        <div className="item__line"></div>
        <p id="item__title">{producto.title}</p>
        <p id="item__price">{producto.detail}</p>
        <p id="item__detail">${producto.price}</p>
      </div>
    </Link>
  );
};

export default Item;
