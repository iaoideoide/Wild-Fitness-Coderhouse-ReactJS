import React from "react";
import "./itemListContainer.css";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="ItemListContainer">
      <h1>{greeting}</h1>
      <ItemList />
    </div>
  );
};

export default ItemListContainer;
