import React, { useEffect, useState } from "react";
import "./itemListContainer.css";
import ItemList from "../ItemList/ItemList";
import Porducts from "../../Products";

import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const params = useParams();
  const categoryItem = params.categoryItem;

  useEffect(() => {
    const promesaItem = new Promise((resolve, reject) => {
      if (categoryItem === undefined) {
        setTimeout(() => resolve(Porducts), 1000);
      } else {
        setTimeout(
          () =>
            resolve(
              Porducts.filter((product) => product.category === categoryItem)
            ),
          1000
        );
      }
    });
    promesaItem.then((respuesta) => setProducts(respuesta));
  }, [params]);

  return (
    <div className="ItemListContainer">
      <h1>{greeting}</h1>
      <h2>{categoryItem}</h2>
      <ItemList productos={products} />
    </div>
  );
};

export default ItemListContainer;
