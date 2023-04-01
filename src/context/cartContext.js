import { createContext, useState } from "react";

const cartContext = createContext({
  cart: [],
});

function CartContextProvider(props) {
  const [cart, setCart] = useState([]);

  function addItem(products) {
    setCart([...cart, products]);
  }

  function removeItem(id) {
    const item = cart.find((product) => product.id === id);
    let newCart = cart.filter((product) => product !== item);
    setCart(newCart);
  }

  function clear() {
    setCart([]);
  }

  function getCountInCart() {
    let total = 0;
    cart.forEach((products) => (total += products.count));
    return total;
  }

  return (
    <cartContext.Provider
      value={{ cart, addItem, getCountInCart, removeItem, clear }}
    >
      {props.children}
    </cartContext.Provider>
  );
}

export { CartContextProvider };

export default cartContext;
