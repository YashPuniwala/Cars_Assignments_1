import React, { useState } from "react";
import {
  InputBase,
  IconButton,
  Stack,
  Paper,
  Box,
  Typography,
} from "@mui/material";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

const Navbar = ({ setSearchQuery }) => {
  const [searchQueryLocal, setSearchQueryLocal] = useState("");

  const handleSearch = () => {
    setSearchQuery(searchQueryLocal);
  };

  const handleHomeClick = () => {
    setSearchQueryLocal("");
    setSearchQuery("");
  };

  return (
    <Stack
      sx={{
        padding: "30px",
        backgroundColor: "#C3C3C3",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          margin: "auto",
          width: "90%",
          borderRadius: "10px",
          backgroundColor: "#E0E0E0",
          padding: "10px",
          display: "flex",
          flexDirection: {xs:"column", sm:"row"},
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Paper elevation={3} sx={{ paddingLeft: "20px", borderRadius: "10px" }}>
          <InputBase
            placeholder="Search..."
            value={searchQueryLocal}
            onChange={(e) => setSearchQueryLocal(e.target.value)}
            style={{ width: "200px" }} // Adjust the width as needed
          />  
          <IconButton onClick={handleSearch}>
            <SearchIcon />
          </IconButton>
        </Paper>

        <Link
          to="/page/1"
          style={{ textDecoration: "none" }}
          onClick={handleHomeClick}
        >
          <Paper elevation={4} sx={{ borderRadius: "10px", padding: "8px", marginTop:{xs:"10px", sm:"0px"} }}>
            <Typography variant="body1" fontSize="17px">
              Home
            </Typography>
          </Paper>
        </Link>
      </Box>
    </Stack>
  );
};

export default Navbar;
