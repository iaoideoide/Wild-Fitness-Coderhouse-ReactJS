import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import "./itemList.css";
import Porducts from "../../Products";

const ItemList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const promesaItem = new Promise((resolve, reject) => {
      setTimeout(() => resolve(Porducts), 1000);
    });

    promesaItem.then((respuesta) => setProducts(respuesta));
  }, []);

  console.log(products);

  return (
    <div className="itemList">
      {products.map((product) => (
        <Item producto={product} />
      ))}
    </div>
  );
};

export default ItemList;
