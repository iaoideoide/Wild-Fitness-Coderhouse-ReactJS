import React from "react";
import { useState } from "react";
import "./counter.css";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoTrashSharp } from "react-icons/io5";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decreaseCount = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <div className="counter">
      <button className="counter__btn" onClick={decreaseCount}>
        <IoIosRemoveCircleOutline color="#000" size={24} />
      </button>
      <h1>{count}</h1>
      <button className="counter__btn" onClick={increaseCount}>
        <IoIosAddCircleOutline color="#000" size={24} />
      </button>
      <button className="counter__btn" onClick={resetCount}>
        <IoTrashSharp color="#000" size={24} />
      </button>
    </div>
  );
};

export default Counter;
