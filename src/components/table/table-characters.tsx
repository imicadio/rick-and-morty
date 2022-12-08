import React, { FC } from "react";
import { Paper, Table, TableBody, TableContainer } from "@mui/material";
import { ITableHeader } from "../../model";
import TableHeader from "./table-header/table-header";
import RenderRows from "./table-row";

const TableCharacters: FC<{ rows: ITableHeader[] }> = ({ rows }) => {
  return (
    <Paper
      sx={{
        width: "100%",
        mb: 2,
        boxShadow: "unset",
        filter: "drop-shadow(0px 2px 18px #DDE3EC)",
      }}
    >
      <TableContainer>
        <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
          <TableHeader />
          <TableBody>
            {rows != null &&
              rows.map((row, index) => {
                return <RenderRows row={row} key={index} />;
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default TableCharacters;
