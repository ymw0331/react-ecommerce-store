import "./cart-item.styles.scss";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, quantity } = cartItem;

  return (
    <div className="cart-item-container">
    <img srd
      <span>{quantity}</span>
    </div>
  );
};

export default CartItem;
