import React from "react";
import { useContext } from "react";
import "./cart.css";
import { RxCross2 } from "react-icons/rx";
import cartContext from "../../context/cartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeItem, clear } = useContext(cartContext);

  if (cart.length === 0) {
    return (
      <div className="cart">
        <h1>Tu Carrito</h1>
        <h2>Tu carrito esta vacio.</h2>
      </div>
    );
  }
  let total = 0;
  cart.forEach((products) => (total += products.price * products.count));

  return (
    <div className="cart">
      <h1>Tu Carrito</h1>

      <table className="cart__list">
        <thead className="cart__list-head">
          <tr className="cart__list-titles">
            <th>Miniatura</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Remover</th>
            <th>Total</th>
          </tr>
        </thead>

        <tbody>
          {cart.map((products) => (
            <tr key={products.id} className="cartList_row">
              <td>
                <img
                  className="cart__list-img"
                  height={50}
                  src={products.pictureUrl}
                  alt={products.title}
                />
              </td>
              <td>{products.title}</td>
              <td>{products.price}</td>
              <td>{products.count}</td>
              <td>
                <button
                  className="cart__button"
                  onClick={() => removeItem(products.id)}
                >
                  <RxCross2 color="#e31515" size={25} />
                </button>
              </td>
              <th>$ {products.price * products.count}</th>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="cart__button-delete">
        <button onClick={() => clear()}>Vaciar carrito</button>
      </div>

      <div className="cart__precio">
        <h4>El total de tu compra es de $ {total}</h4>
      </div>
      <Link to="/checkOut">
        <button className="cart__button-delete">Terminar Compra</button>
      </Link>
    </div>
  );
};

export default Cart;
