import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  pagination: {
    // display:"flex",
    // alignItems:"center",
    // justifyContent: "center",
    // marginTop: theme.spacing(5), 
  },
}));

const Paginations = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
  maxPages,
}) => {
  const classes = useStyles();

  const handlePageChange = (event, newPage) => {
    onPageChange(newPage);
  };

  return (
    <Stack spacing={2} className={classes.pagination}>
      {totalItems > itemsPerPage && (
        <Pagination
          count={maxPages} 
          page={currentPage}
          onChange={handlePageChange} 
          variant="outlined"
          color="primary" 
        />
      )}
    </Stack>
  );
};

export default Paginations;
