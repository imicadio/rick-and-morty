import React, { useState, FC } from "react";
import {
  Box,
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { FilterType } from "./model";
import search from "../../assets/search.svg";

const Filters: FC<FilterType> = ({ customClass }) => {
  const [age, setAge] = useState<string>("");

  const species: string[] = [
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ];

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const renderOptions = species.map((item: string) => (
    <MenuItem value={item} key={item}>{item}</MenuItem>
  ));

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
            color: "#8C9193",
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

      <FormControl
        sx={{
          width: "140px",
          marginLeft: "48px",
          ".MuiOutlinedInput-root > div": {
            py: 0,
            height: "40px",
            display: "flex",
            alignItems: "center",
          },
          ".MuiInputLabel-shrink": {
            display: "none",
          },
          ".MuiInputLabel-root": {
            fontSize: "14px",
            lineHeight: 1,
            color: "#484F53",
            "&.Mui-focused[data-shrink=true]": {
              display: "none",
            },
          },
        }}
      >
        <InputLabel id="demo-simple-select-label">Species</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          onChange={handleChange}
        >
          {renderOptions}
        </Select>
      </FormControl>
    </Box>
  );
};

export default Filters;
