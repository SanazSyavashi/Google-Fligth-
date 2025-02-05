/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination, Box } from '@mui/material';
import { useState } from 'react';

const GTable = ({ rows, columns }: { rows: any[], columns: string[] }) => {
  const [page, setPage] = useState(0); // Track current page
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); 
  }
  return (
    <Box className='flex flex-col justify-center items-center '>
    <TableContainer component={Paper} className='box'>
      <Table>
        <TableHead>
          <TableRow>
            {
              columns.map((col) =>
                <TableCell key={col}> {col.charAt(0).toUpperCase() + col.slice(1)}</TableCell>
              )}
          </TableRow>
        </TableHead>
        <TableBody>
        {rows?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) 
              .map((row) => (
            <TableRow key={row.id}>
              {columns.map((col) =>
              <TableCell className='w-mx-auto' key={`${row[`${col}`]}-${row.id}`}>{row[`${col}`]}</TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        <TablePagination
        rowsPerPageOptions={[10]}
        component="div"
        count={rows?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      </Box>
  );
};

export default GTable;
