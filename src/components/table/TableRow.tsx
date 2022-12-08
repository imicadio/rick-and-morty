import React, { FC, MutableRefObject, useRef } from "react";
import {
  TableCell,
  Checkbox,
  TableRow,
  Typography,
  Tooltip,
} from "@mui/material";
import { ITableHeader, IUrl, IStatus } from "../../model.d";

const RenderRows: FC<{ row: ITableHeader }> = ({ row }) => {
  const PADDING_Y = '9px'

  const widthTextTruncate =
    useRef() as React.MutableRefObject<HTMLInputElement>;

  const returnText = (row: IUrl, refek: MutableRefObject<HTMLInputElement>) => {
    if (
      refek.current &&
      refek.current.offsetWidth < refek.current.scrollWidth
    ) {
      return (
        <Tooltip title={row.name}>
          <span>{row.name}</span>
        </Tooltip>
      );
    }

    return <span>{row.name}</span>;
    // console.log(refek.current.offsetWidth < refek.current.scrollWidth);
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
      sx={{
        backgroundColor: row.status.name === IStatus.DEAD ? "#F6F8FA" : null,
      }}
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
          py: PADDING_Y
        }}
      >
        <Typography
          variant="body1"
          component="p"
          sx={{
            color: row.status.name === IStatus.DEAD ? "#5F6569" : "#1A2328",
            fontWeight: 500,
            fontSize: "15px",
            py: PADDING_Y
          }}
        >
          {row.name}
        </Typography>
        <Typography
          variant="body1"
          component="p"
          sx={{
            color: row.status.name === IStatus.DEAD ? "#8C9193" : "#484F53",
            fontSize: "15px",
            fontWeight: 400,
          }}
        >
          {row.species}
        </Typography>
      </TableCell>
      <TableCell
        align="left"
        sx={{
          width: "162px",
          px: "25px",
          fontSize: "15px",
          py: PADDING_Y
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
          py: PADDING_Y
        }}
      >
        <Typography
          variant="body1"
          component="p"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            fontSize: "15px",
            maxWidth: "161px",
            color:
              row.status.name === IStatus.DEAD
                ? IStatus.UNKNOWN === row.origin.name
                  ? "#C6C8C9"
                  : "#5F6569"
                : "#1A2328",
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
          color: row.status.name === IStatus.DEAD ? "#5F6569" : "#1A2328",
          py: PADDING_Y
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
          color: "#1A2328",
          py: PADDING_Y
        }}
      >
        <Typography
          variant="body2"
          component="p"
          sx={{
            display: "flex",
            gap: "8px",
            fontSize: "15px",
            alignItems: "center",
            color: row.status.name === IStatus.UNKNOWN ? "#5F6569" : "#1A2328",
          }}
        >
          {row.status.icon}
          {row.status.name}
        </Typography>
      </TableCell>
    </TableRow>
  );
};

export default RenderRows;
