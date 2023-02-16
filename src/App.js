import React from "react";
import Navbar from "./components/navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer />
    </div>
  );
};

export default App;
