import React from "react";
import { initializeApp } from "firebase/app";
import { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import cartContext from "../../context/cartContext";
import "./checkOut.css";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import Swal from "sweetalert";
const CheckOut = () => {
  const navigate = useNavigate();
  const { cart, clear, cartTotal } = useContext(cartContext);
  const [valores, setValores] = useState({
    nombre: undefined,
    mail: undefined,
    telefono: undefined,
    items: cart,
    fecha: new Date(),
    total: cartTotal(),
  });

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

  async function createOrder(orderData) {
    const collectionRef = collection(db, "orders");

    const response = await addDoc(collectionRef, orderData);
    Swal({
      title: "Compra realizada con exito!",
      text: "Gracias por tu compra!!, tu codigo de orden es " + response.id,
      icon: "success",
      buttons: true,
    });
  }

  async function checkOut() {
    let orderData = valores;
    await createOrder(orderData);
    clear();
    navigate("/");
  }

  const handleInput = (e) => {
    setValores({
      ...valores,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="checkOut">
      <h1>Termina tu compra</h1>
      <h2>Ya queda solo un paso!</h2>
      <form action="POST" className="checkOut_form">
        <input
          type={"text"}
          name="nombre"
          className="my-3 form-control"
          placeholder="Tu Nombre"
          onChange={handleInput}
          required
        ></input>
        <input
          type={"email"}
          name="mail"
          className="my-3 form-control"
          placeholder="Tu mail"
          onChange={handleInput}
          required
        ></input>
        <input
          type={"number"}
          name="telefono"
          className="my-3 form-control"
          placeholder="Tu telefono"
          onChange={handleInput}
          required
        ></input>
      </form>

      <button className="checkOut__button" onClick={checkOut}>
        Terminar Compra
      </button>
    </div>
  );
};

export default CheckOut;
