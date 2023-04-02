import React, { useEffect, useState } from "react";
import "./itemDetailContainer.css";
import Counter from "../Counter/Counter";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import cartContext from "../../context/cartContext";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [products, setProducts] = useState([]);
  const params = useParams();
  const idItem = params.idItem;

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

  async function getSingleItemFromDatabase(idItem) {
    const productsColectionRef = collection(db, "products");
    const docRef = doc(productsColectionRef, idItem);

    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists() === false)
      throw new Error("No existe el documento");

    return { ...docSnapshot.data(), id: docSnapshot.id };
  }

  useEffect(() => {
    getSingleItemFromDatabase(idItem)
      .then((respuesta) => {
        setProducts(respuesta);
      })
      .catch((error) => alert(error));
  }, []);

  const { addItem, isInCart } = useContext(cartContext);

  function onAddToCart(count) {
    alert(`Agregaste ${count} items al carrito`);
    if (isInCart(products.id)) {
      products.count += count;
    } else {
      products.count = count;
      addItem(products);
    }
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
