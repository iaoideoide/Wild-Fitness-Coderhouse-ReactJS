import React from "react";
import Navbar from "./components/navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NotFound from "./components/NotFound/NotFound";
import Counter from "./components/Counter/Counter";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <ItemListContainer />
              <Counter />
            </div>
          }
        />
        <Route path="/detail" element={<Counter />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
