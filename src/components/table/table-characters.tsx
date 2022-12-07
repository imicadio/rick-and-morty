import React, { FC } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  Checkbox,
  TableRow,
} from "@mui/material";
import { ITableHeader } from "../../model";
import TableHeader from "./table-header/table-header";

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
                  <TableRow
                    hover
                    // onClick={(event) => handleClick(event, row.name)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.name}
                    selected={isItemSelected}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          "aria-labelledby": labelId,
                        }}
                      />
                    </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      {row.name}
                      <br />
                      {row.species}
                    </TableCell>
                    <TableCell align="left">
                      <img
                        src={row.avatar}
                        alt={row.name}
                        style={{
                          maxWidth: "50px",
                          maxHeight: "50px",
                          borderRadius: '15px',
                          border: '2px dashed #E5EAF0',
                          filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
                        }}
                      />
                    </TableCell>
                    <TableCell align="left">{row.origin.name}</TableCell>
                    <TableCell align="left">{row.gender}</TableCell>
                    <TableCell align="left">{row.status}</TableCell>
                  </TableRow>
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
