import ProductItem from "../../components/Products/ProductItem";
import BasicCard from "../../components/UI/BasicCard";
import { useCustomStore } from "../hooks-store/store";

const Products = (props) => {
  const state = useCustomStore()[0];

  return (
    <BasicCard>
      {console.log(state)}
      {state.products.map((prod) => (
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
