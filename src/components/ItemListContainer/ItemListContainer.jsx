import React, { useEffect, useState } from "react";
import "./itemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const params = useParams();
  const categoryItem = params.categoryItem;

  const firebaseConfig = {
    apiKey: "AIzaSyAww5F0mBfyqJv7XXumevzuwHANJ9ykheM",
    authDomain: "wild-fitness-react.firebaseapp.com",
    projectId: "wild-fitness-react",
    storageBucket: "wild-fitness-react.appspot.com",
    messagingSenderId: "85713446059",
    appId: "1:85713446059:web:6da20bae47dfbdc81683ee",
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  async function getItemsFromDatabase() {
    const productsColectionRef = collection(db, "products");
    let snapshotProducts = await getDocs(productsColectionRef);
    const documents = snapshotProducts.docs;

    const dataProducts = documents.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return dataProducts;
  }

  async function getItemsByCategoryFromDatabase(categoryURL) {
    const productsColectionRef = collection(db, "products");

    const q = query(productsColectionRef, where("category", "==", categoryURL));

    let snapshotProducts = await getDocs(q);
    const documents = snapshotProducts.docs;
    const dataProducts = documents.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    return dataProducts;
  }

  async function leerDatos() {
    if (categoryItem === undefined) {
      let respuesta = await getItemsFromDatabase();
      setProducts(respuesta);
    } else {
      let respuesta = await getItemsByCategoryFromDatabase(categoryItem);
      setProducts(respuesta);
    }
  }

  useEffect(() => {
    leerDatos();
  }, [categoryItem]);

  return (
    <div className="ItemListContainer">
      <h1>{greeting}</h1>
      <h2>{categoryItem}</h2>
      <ItemList productos={products} />
    </div>
  );
};

export default ItemListContainer;
