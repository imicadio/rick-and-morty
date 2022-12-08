import React, { FC } from "react";
import { TableHead, TableCell, Checkbox, TableRow } from "@mui/material";
import { Gender, TStatus, IUrl } from "../../../model.d";

const TableHeader: FC<{}> = () => {
  interface Data {
    name: string;
    avatar: string;
    origin: IUrl;
    gender: Gender;
    status: TStatus;
  }

  type HeadCell = {
    id: keyof Data;
  };
  const headCells: readonly HeadCell[] = [
    {
      id: "name",
    },
    {
      id: "avatar",
    },
    {
      id: "origin",
    },
    {
      id: "gender",
    },
    {
      id: "status",
    },
  ];

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            // indeterminate={numSelected > 0 && numSelected < rowCount}
            // checked={rowCount > 0 && numSelected === rowCount}
            // onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="left"
            sx={{
              textTransform: "capitalize",
              px: "25px",
            }}
          >
            {headCell.id}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
