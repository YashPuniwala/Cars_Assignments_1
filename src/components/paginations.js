import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Paginations = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
  maxPages,
}) => {
  const handlePageChange = (event, newPage) => {
    onPageChange(newPage);
  };

  return (
    <Stack spacing={2} sx={{marginTop:"30px"}}>
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
