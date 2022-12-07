import React, { FC, MutableRefObject, useRef } from "react";
import {
  TableCell,
  Checkbox,
  TableRow,
  Typography,
  Tooltip,
} from "@mui/material";
import { ITableHeader, IUrl } from "../../model";

const RenderRows: FC<{ row: ITableHeader }> = ({ row }) => {
  const widthTextTruncate =
    useRef() as React.MutableRefObject<HTMLInputElement>;

  const returnText = (row: IUrl, refek: MutableRefObject<HTMLInputElement>) => {
    if (refek.current)
      console.log(refek.current.offsetWidth < refek.current.scrollWidth);
    return (
      <Tooltip title={row.name}>
        <span>{row.name}</span>
      </Tooltip>
    );
  };

  return (
    <TableRow
      hover
      // onClick={(event) => handleClick(event, row.name)}
      role="checkbox"
      //   aria-checked={isItemSelected}
      tabIndex={-1}
      key={row.name}
      //   selected={isItemSelected}
    >
      <TableCell padding="checkbox">
        <Checkbox
          color="primary"
          //   checked={isItemSelected}
          //   inputProps={{
          //     "aria-labelledby": labelId,
          //   }}
        />
      </TableCell>
      <TableCell
        component="th"
        // id={labelId}
        scope="row"
        sx={{
          px: "25px",
          width: "231px",
          fontSize: "15px",
        }}
      >
        {row.name}
        <br />
        {row.species}
      </TableCell>
      <TableCell
        align="left"
        sx={{
          width: "162px",
          px: "25px",
          fontSize: "15px",
        }}
      >
        <img
          src={row.avatar}
          alt={row.name}
          style={{
            maxWidth: "50px",
            maxHeight: "50px",
            borderRadius: "15px",
            border: "2px dashed #E5EAF0",
            filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
            fontSize: "15px",
          }}
        />
      </TableCell>
      <TableCell
        align="left"
        sx={{
          px: "25px",
          width: "162px",
        }}
      >
        <Typography
          variant="body1"
          component="p"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            // display: "-webkit-box",
            // WebkitLineClamp: "1",
            // WebkitBoxOrient: "vertical",
            fontSize: "15px",
            maxWidth: "161px",
          }}
          ref={widthTextTruncate}
        >
          {returnText(row.origin, widthTextTruncate)}
        </Typography>
      </TableCell>
      <TableCell
        align="left"
        sx={{
          px: "25px",
          width: "162px",
          fontSize: "15px",
        }}
      >
        {row.gender}
      </TableCell>
      <TableCell
        align="left"
        sx={{
          px: "25px",
          width: "162px",
          fontSize: "15px",
        }}
      >
        {row.status}
      </TableCell>
    </TableRow>
  );
};

export default RenderRows;
