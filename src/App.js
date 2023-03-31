import React from "react";
import Navbar from "./components/navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NotFound from "./components/NotFound/NotFound";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<ItemListContainer greeting={"WILD FITNESS"} />}
        />
        <Route path="/detail/:idItem" element={<ItemDetailContainer />} />
        <Route
          path="/category/:categoryItem"
          element={<ItemListContainer greeting={"WILD FITNESS"} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
