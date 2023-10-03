import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Stack, Typography, Grid, Box } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import CarCard from "./carCard";
import Paginations from "./paginations";

const useStyles = makeStyles((theme) => ({}));

const CarPage = ({ data, searchQuery }) => {
  const classes = useStyles();
  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(location.search);
  const currentPageFromURL = parseInt(searchParams.get("page") || "1", 10);

   // Check if currentPageFromURL is NaN or undefined, and set it to 1 as a default.
  if (isNaN(currentPageFromURL) || currentPageFromURL < 1) {
    currentPageFromURL = 1;
  }

  const [currentPage, setCurrentPage] = useState(currentPageFromURL);
  const totalCars = data.length;
  const carsPerPage = Math.max(1, Math.floor(totalCars / 5));

  const filteredCars = data.filter((car) =>
    car.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    navigate(`/page/${currentPage}`);
  }, [currentPage, navigate]);

  const startIndex = (currentPage - 1) * carsPerPage;
  const endIndex = Math.min(startIndex + carsPerPage, totalCars);

  const currentCars = filteredCars.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const maxPages = Math.ceil(filteredCars.length / carsPerPage);
  console.log(currentCars, "currentCars");
  //   console.log(carsPerPage, 'carsPerPage')

  return (
    <Stack
      sx={{ padding: "30px", backgroundColor: "#C3C3C3" }}
    >
      <Grid container spacing={3}>
        {Array.isArray(currentCars) ? (
          currentCars.map((car) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={car.id}>
              <CarCard car={car} />
            </Grid>
          ))
        ) : (
          <Typography variant="body1">No cars to display.</Typography>
        )}
      </Grid>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alingItems: "center",
          marginTop: "15px",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          {Object.keys(currentCars).length} from {totalCars}
        </Typography>

        <Paginations
          totalItems={filteredCars.length}
          itemsPerPage={carsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
          maxPages={maxPages}
        />
      </Box>
    </Stack>
  );
};

export default CarPage;
