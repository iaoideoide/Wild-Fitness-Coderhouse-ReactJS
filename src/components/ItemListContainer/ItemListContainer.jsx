import React from "react";
import "./itemListContainer.css";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = () => {
  return (
    <div className="ItemListContainer">
      <h1>WILD FITNESS</h1>
      <ItemList />
    </div>
  );
};

export default ItemListContainer;
