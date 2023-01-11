import { Button, Card, CardActions, CardContent } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useCustomStore } from "../../src/hooks-store/store";

export default function ProductItem(props) {
  const dispatch = useCustomStore()[1];

  const toggleFavHandler = () => {
    dispatch("TOGGLE_FAV", props.id);
  };

  return (
    <Card
      sx={{
        display: "inline-block",
        width: "250px",
        margin: 1,
        backgroundColor: "darkgray",
      }}
    >
      <CardContent sx={{ minWidth: 100, minHeight: 100 }}>
        <Typography
          sx={{ fontSize: 25, height: 100 }}
          color="text.secondary"
          gutterBottom
        >
          {props.title}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.description}
        </Typography>
      </CardContent>
      <CardActions sx={{ minWidth: 100, minHeight: 100 }}>
        <Button onClick={toggleFavHandler}>
          {props.isFav ? "Not Favorite" : "Favorite"}
        </Button>
      </CardActions>
    </Card>
  );
}
