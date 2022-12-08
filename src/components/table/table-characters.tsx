import React, { FC, MutableRefObject, useRef } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  Checkbox,
  TableRow,
  Typography,
} from "@mui/material";
import { ITableHeader, IUrl } from "../../model";
import TableHeader from "./table-header/table-header";
import RenderRows from "./TableRow";

const TableCharacters: FC<{ rows: ITableHeader[]; selected: string[] }> = ({
  rows,
  selected,
}) => {
  

  const isSelected = (name: string) => selected.indexOf(name) !== -1;
  return (
    <Paper sx={{ width: "100%", mb: 2 }}>
      <TableContainer>
        <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
          <TableHeader
          // numSelected={selected.length}
          // // onSelectAllClick={handleSelectAllClick}
          // // onRequestSort={handleRequestSort}
          // rowCount={rows && rows.length}
          />
          <TableBody>
            {rows != null &&
              rows.map((row, index) => {
                const isItemSelected = isSelected(row.name);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <RenderRows row={row} key={index} />
                );
              })}
            {/* {emptyRows > 0 && (
                    <TableRow
                      style={{
                        height:  53 * emptyRows,
                      }}
                    >
                      <TableCell colSpan={6} />
                    </TableRow>
                  )} */}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            /> */}
    </Paper>
  );
};

export default TableCharacters;
