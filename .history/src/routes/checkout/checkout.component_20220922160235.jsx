import { useContext } from "react";
import { CartContext } from "../../contexts/cart.contexts";

import "./checkout.styles.scss";

const CheckOut = () => {
  const { cartItems, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
        <span>Description</span>

        </div>
        <div className="header-block">
        <span>Quantity</span>

        </div>
        <div className="header-block">
        <span>Prive</span>

        </div>
        <div className="header-block"></div>
      </div>

      <div>
        {cartItems.map((cartItem) => {
          const { id, name, quantity } = cartItem;

          return (
            <div key={id}>
              <h2>{name}</h2>
              <span>{quantity}</span>
              <br />
              <span onClick={() => removeItemFromCart(cartItem)}>
                decrement
              </span>
              <br />
              <span onClick={() => addItemToCart(cartItem)}>increment </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CheckOut;
