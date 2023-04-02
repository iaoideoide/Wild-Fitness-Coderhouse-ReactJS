import { createContext, useState } from "react";

const cartContext = createContext({
  cart: [],
});

function CartContextProvider(props) {
  const [cart, setCart] = useState([]);

  const isInCart = (productId) => {
    return cart.some((product) => product.id === productId);
  };

  function addItem(products) {
    if (cart.includes(products)) {
      return;
    } else {
      setCart([...cart, products]);
    }
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

  const cartTotal = () => {
    let total = cart.reduce((acc, item) => (acc = +item.count * item.price), 0);
    console.log("ahh", total);
    return total;
  };

  return (
    <cartContext.Provider
      value={{
        cart,
        addItem,
        getCountInCart,
        removeItem,
        clear,
        isInCart,
        cartTotal,
      }}
    >
      {props.children}
    </cartContext.Provider>
  );
}

export { CartContextProvider };

export default cartContext;
