import React from "react";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import { Typography, Container, Toolbar, Stack } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import HomeIcon from "@mui/icons-material/Home";


export default function NavBar() {

  return (
    <AppBar position="static" sx={{ bgcolor: "orange" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to="/">
            <IconButton size="large" edge="start" aria-label="logo">
              <HomeIcon />
            </IconButton>
          </Link>
          <Typography variant="h6" sx={{ flexGrow: 1, color: "black" }}>
            E-commerce
          </Typography>
          <Stack direction="row" spacing={2}>
            <Link to="/create">
            <Typography variant="button" sx={{ color: "black" }}>Add product</Typography>
            </Link>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}