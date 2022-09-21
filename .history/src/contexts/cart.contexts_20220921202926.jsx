import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  // find if cartItem contains productToAdd
  // if found, increment qunatity
  // return new array with modified cartItems/ new cart item
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

/*
product
{
  id,
  name,
  price,
  imageUrl
}
*/

/* 
cart-item{
  id,
  name,
  price,
  imageUrl,
  quantity
}*/

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = { isCartOpen, setIsCartOpen };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
