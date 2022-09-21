import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";

const CartIcon = () => {
  return (
    <div>
      <ShoppingIcon />
      <span>10</span>
    </div>
  );
};

export default CartIcon;
