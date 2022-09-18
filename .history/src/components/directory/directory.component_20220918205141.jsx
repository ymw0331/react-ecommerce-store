import CategoryItem from "../category-item/category-item.component";
import "./direcotry.styles.scss";

const Directory = ({ categories }) => {
  return (
    <div className="d-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
