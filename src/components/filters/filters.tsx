import React, { FC } from "react";
import { Box, TextField, InputAdornment } from "@mui/material";
import { FilterType } from "./model";
import search from "../../assets/search.svg";

const Filters: FC<FilterType> = ({ customClass }) => {
  return (
    <Box sx={customClass}>
      <TextField
        sx={{
          ".MuiOutlinedInput-root": {
            maxWidth: "140px",
            fontSize: "14px",
            pr: "unset",
          },
          ".MuiOutlinedInput-input": {
            padding: 0,
            height: "40px",
          },
          ".MuiInputLabel-root": {
            fontSize: "14px",
            lineHeight: 1,
          },
        }}
        label="Search"
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <img src={search} alt="search" />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default Filters;
