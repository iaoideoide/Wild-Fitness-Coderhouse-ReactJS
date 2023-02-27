import React from "react";
import Navbar from "./components/navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Counter from "./components/Counter/Counter";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer />
      <Counter />
    </div>
  );
};

export default App;
