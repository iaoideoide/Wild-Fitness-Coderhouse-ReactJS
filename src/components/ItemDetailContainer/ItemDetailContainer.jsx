import React, { useEffect, useState } from "react";
import "./itemDetailContainer.css";
import Counter from "../Counter/Counter";
import { useParams } from "react-router-dom";
import Porducts from "../../Products";
import { useContext } from "react";
import cartContext from "../../context/cartContext";

const ItemDetailContainer = () => {
  const [products, setProducts] = useState([]);
  const params = useParams();
  const idItem = params.idItem;

  useEffect(() => {
    const promesaItem = new Promise((resolve, reject) => {
      setTimeout(() => resolve(Porducts[idItem]), 1000);
    });

    promesaItem.then((respuesta) => setProducts(respuesta));
  }, [idItem]);

  const { addItem } = useContext(cartContext);

  function onAddToCart(count) {
    alert(`Agregaste ${count} items al carrito`);
    products.count = count;
    addItem(products);
    console.log("producto " + products.count);
  }

  return (
    <div className="itemDetailContainer">
      <div className="itemDetailContainer__container">
        <img src={products.pictureUrl} alt="imagen producto" />
        <div className="itemDetailContainer-data-container">
          <div className="itemDetailContainer__texts-container">
            <h1>{products.title}</h1>
            <h2>${products.price}</h2>
            <h3>{products.detail}</h3>
          </div>
          <Counter stock={products.stock} onAddToCart={onAddToCart} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
