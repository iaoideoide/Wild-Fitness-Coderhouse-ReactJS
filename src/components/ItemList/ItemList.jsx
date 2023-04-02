import React from "react";
import Item from "../Item/Item";
import "./itemList.css";

const ItemList = ({ productos }) => {
  return (
    <div className="itemList">
      {productos.map((product) => (
        <Item producto={product} />
      ))}
    </div>
  );
};

export default ItemList;
