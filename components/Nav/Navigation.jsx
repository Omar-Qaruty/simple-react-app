import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function ButtonAppBar() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <Button variant="contained" color="inherit">
              Products
            </Button>
          </Link>
          <Link to="/favorites">
            <Button variant="contained" color="inherit">
              Favorites
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
