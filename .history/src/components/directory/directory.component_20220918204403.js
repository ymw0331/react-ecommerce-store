import CategoryItem from "../category-item/category-item.component";

const Directory = () => {

    return(
        <div className="categories-container">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>;
    )
};
