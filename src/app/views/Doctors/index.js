import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom"
import hook from "./hook"
import EditIcon from '@mui/icons-material/Edit';

export default () => {
    const { doctors, match } = hook()

    return (
        <>
        {doctors ?
        (<TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="right">First Name</TableCell>
                <TableCell align="right">Last Name</TableCell>
                <TableCell align="right">Edit</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
              {doctors.map((doctor) => (
                <TableRow
                  key={doctor.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {doctor.id}
                  </TableCell>
                  <TableCell align="right">{doctor.first_name}</TableCell>
                  <TableCell align="right">{doctor.last_name}</TableCell>
                  <TableCell align="right"><Link to={`${match.url}/${doctor.id}`}><EditIcon/></Link></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>)
        : "loading"}
        </>
      );
}