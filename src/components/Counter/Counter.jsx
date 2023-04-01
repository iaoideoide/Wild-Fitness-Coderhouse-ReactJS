import React from "react";
import { useState } from "react";
import "./counter.css";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoTrashSharp } from "react-icons/io5";

const Counter = ({ stock, onAddToCart }) => {
  const [count, setCount] = useState(1);

  const increaseCount = () => {
    if (count < stock) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  const decreaseCount = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const resetCount = () => {
    setCount(1);
  };

  return (
    <div className="counter">
      <button className="counter__btn" onClick={decreaseCount}>
        <IoIosRemoveCircleOutline color="#fff" size={24} />
      </button>
      <h1>{count}</h1>
      <button className="counter__btn" onClick={increaseCount}>
        <IoIosAddCircleOutline color="#fff" size={24} />
      </button>
      <button className="counter__btn" onClick={resetCount}>
        <IoTrashSharp color="#fff" size={24} />
      </button>
      <button className="counter_addToCart" onClick={() => onAddToCart(count)}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default Counter;
