import { Typography } from "@mui/material";
import FavoriteItem from "../../components/Favorites/FavoriteItem";
import BasicCard from "../../components/UI/BasicCard";
import { useCustomStore } from "../hooks-store/store";

const Favorites = (props) => {
  const state = useCustomStore()[0];
  const favoriteProducts = state.products.filter((p) => p.isFavorite);

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
