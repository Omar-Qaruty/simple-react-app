import BasicCard from "../UI/BasicCard";
import { Box, Button, Card, CardActions, CardContent } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function FavoriteItem(props) {
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
    </Card>
  );
}
