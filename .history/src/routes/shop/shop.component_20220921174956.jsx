import { useContext } from "react";

import { ProductContext } from "../../contexts/products.context";

const Shop = () => {
  const { products } = useContext(ProductContext);

  return (
    <div>
      {SHOP_DATA.map(({ id, name }) => (
        <div key={id}>
          <h1>{name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Shop;
