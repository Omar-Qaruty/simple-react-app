import { useSelector } from "react-redux";
import ProductItem from "../../components/Products/ProductItem";
import BasicCard from "../../components/UI/BasicCard";
const Products = (props) => {
  const productList = useSelector((state) => state.shop.products);
  return (
    <BasicCard>
      {productList.map((prod) => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </BasicCard>
  );
};

export default Products;
