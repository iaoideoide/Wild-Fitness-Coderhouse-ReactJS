import React from "react";
import Navbar from "./components/navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NotFound from "./components/NotFound/NotFound";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";
import CheckOut from "./components/CheckOut/CheckOut";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/cartContext";
import "./App.css";

const App = () => {
  return (
    <CartContextProvider>
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
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkOut" element={<CheckOut />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  );
};
export default App;
