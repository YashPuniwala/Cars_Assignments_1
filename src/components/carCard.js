import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Paper,
  Typography,
  Zoom,
} from "@mui/material";
import { makeStyles } from "@material-ui/core";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import LocalGasStationIcon from "@material-ui/icons/LocalGasStation";
import SpeedIcon from "@material-ui/icons/Speed";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 300,
    margin: "auto",
    backgroundColor: "#C3C3C3", // Card background color
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Card box shadow
    transition: "transform 0.2s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)", // Enlarge the card on hover
    },
  },
  media: {
    height: 200,
    borderRadius: "20px",
  },
}));

const CarCard = ({ car }) => {
  const classes = useStyles();

  return (
    <Zoom in={true}>
      <Card
        className={classes.card}
        sx={{
          maxWidth: { xs: 400, sm: 300 },
          padding: "5px",
          background: "#E0E0E0",
          borderRadius: "20px",
        }}
      >
        <CardMedia
          sx={{ height: { xs: 200, sm: 180 } }}
          className={classes.media}
          image={car.image}
          title={car.name}
          // sx={{ width: 30, height: 180 }}
        />
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alingItems: "center",
              marginBottom: "10px",
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{ fontWeight: "bold" }}
            >
              {car.name}
            </Typography>
            <Paper elevantion={3} sx={{ padding: "5px", borderRadius: "15px" }}>
              <Typography variant="body2" color="textSecondary">
                {car.year}
              </Typography>
            </Paper>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alingItems: "center",
            }}
          >
            <Box display="flex" alignItems="center">
              <IconButton sx={{ color: "#4183f2" }}>
                <PeopleOutlineIcon />
              </IconButton>
              <Typography
                variant="body2"
                color="textSecondary"
                fontWeight="bold"
              >
                {car.seat}
              </Typography>
            </Box>

            <Box display="flex" alignItems="center" sx={{ marginRight: "9px" }}>
              <IconButton sx={{ color: "#4183f2" }}>
                <LocalGasStationIcon />
              </IconButton>
              <Typography variant="body2" color="textSecondary">
                {car.type}
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alingItems: "center",
            }}
          >
            <Box display="flex" alignItems="center">
              <IconButton sx={{ color: "#4183f2" }}>
                <SpeedIcon />
              </IconButton>
              <Typography variant="body2" color="textSecondary">
                {car.mileage}
              </Typography>
            </Box>

            <Box display="flex" alignItems="center">
              <IconButton sx={{ color: "#4183f2" }}>
                <DirectionsCarIcon />
              </IconButton>
              <Typography variant="body2" color="textPrimary">
                {/* ${car.price.toLocaleString()} */}
                {car.transmission}
              </Typography>
            </Box>
          </Box>

          <hr style={{ marginBottom: "20px", marginTop: "10px" }} />

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alingItems: "center",
            }}
          >
            <Typography
              variant="h6"
              color="textPrimary"
              sx={{ marginTop: "4px" }}
            >
              ${car.price.toLocaleString()}
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton
                sx={{
                  marginBottom: "2px",
                  borderRadius: "15px",
                  padding: "5px",
                  marginRight: "5px",
                }}
              >
                <FavoriteBorderIcon />
              </IconButton>

              <button
                style={{
                  width: "100px",
                  height: "30px",
                  borderRadius: "20px",
                  marginBottom: "3px",
                }}
              >
                Rent now
              </button>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Zoom>
  );
};

export default CarCard;
