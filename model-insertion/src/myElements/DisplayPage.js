import "./DisplayPage.css";
import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box'; // Import the Box component

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function DisplayPage(props) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="10vh"
      minWidth="100vh"
    >
      <Paper sx={{ width: '100%', overflow: 'hidden',}}> 
        <TableContainer sx={{ maxHeight: 800 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <StyledTableCell sx = {{background: 'linear-gradient(to bottom, red, orange)'}}>Models</StyledTableCell>
              <StyledTableCell align="center" sx = {{background: 'linear-gradient(to bottom, red, orange)'}}>Family Model</StyledTableCell>
              <StyledTableCell align="center" sx = {{background: 'linear-gradient(to bottom, red, orange)'}}>Range</StyledTableCell>
              <StyledTableCell align="center" sx = {{background: 'linear-gradient(to bottom, red, orange)'}}>Speed</StyledTableCell>
              <StyledTableCell align="center" sx = {{background: 'linear-gradient(to bottom, red, orange)'}}>Frequency</StyledTableCell>
            </TableHead>
            <TableBody>
              {props.list.map((item, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell component="th" scope="row">{item[0]}</StyledTableCell>
                  <StyledTableCell align="center">{item[1]}</StyledTableCell>
                  <StyledTableCell align="center">{item[2]}</StyledTableCell>
                  <StyledTableCell align="center">{item[3]}</StyledTableCell>
                  <StyledTableCell align="center">{item[4]}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}

export default DisplayPage;
