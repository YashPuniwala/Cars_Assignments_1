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
    // Reset the local searchQueryLocal and the global searchQuery
    setSearchQueryLocal("");
    setSearchQuery("");
  };

  return (
    <Stack sx={{ padding: "30px", backgroundColor: "#C3C3C3" }}>
      <Box
        sx={{
          borderRadius: "10px",
          backgroundColor: "#E0E0E0",
          padding: "10px",
          display: "flex",
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

        <Link to="/page/1" style={{ textDecoration: "none" }}  onClick={handleHomeClick}>
          <Paper elevation={4} sx={{ borderRadius: "10px", padding: "8px" }}>
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
