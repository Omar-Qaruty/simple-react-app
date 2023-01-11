import { Typography } from "@mui/material";
import { useSelector } from "react-redux";
import FavoriteItem from "../../components/Favorites/FavoriteItem";
import BasicCard from "../../components/UI/BasicCard";

const Favorites = (props) => {
  const favoriteProducts = useSelector((state) =>
    state.shop.products.filter((p) => p.isFavorite)
  );

  let content = (
    <Typography
      sx={{ fontSize: 25, height: 100 }}
      color="text.secondary"
      gutterBottom
    >
      no favorites yet
    </Typography>
  );
  if (favoriteProducts.length > 0) {
    content = (
      <BasicCard className="products-list">
        {favoriteProducts.map((prod) => (
          <FavoriteItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
          />
        ))}
      </BasicCard>
    );
  }
  return content;
};

export default Favorites;
