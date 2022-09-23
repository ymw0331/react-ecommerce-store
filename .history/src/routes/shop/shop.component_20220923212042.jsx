import { useContext, Fragment } from "react";

import { CategoriesContext } from "../../contexts/categories.context";
import "./shop.styles.scss";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {

        {Object.keys(categoriesMap)}
      }
      <div className="products-container">
        {/* {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))} */}
      </div>
    </Fragment>
  );
};

export default Shop;
