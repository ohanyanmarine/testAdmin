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
import { Button, CircularProgress, TextField } from "@mui/material";
import { blue } from "@mui/material/colors";

export default () => {
  const { doctors, match } = hook()

  return (
    <>
      <div className="main-header">
        <div>
          <h1>Доктора</h1>
        </div>
        <div>
          <TextField
            placeholder="Поиск"
            type='search' size="small" sx={{ width: "300px", bgcolor: "white" }}
          />
        </div>
        <div>
          <Link to={`${match.url}/add`}>
            <Button
              size="small"
              variant="outlined"
              sx={{ bgcolor: blue[300], borderColor: blue[300], color: 'white' }}>
              Добавить
            </Button>
          </Link>
        </div>
      </div>
      {doctors ?
        (<TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>N</TableCell>
                <TableCell align="right">Имя</TableCell>
                <TableCell align="right">Last Name</TableCell>
                <TableCell align="right">Edit</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {doctors.map((doctor, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {index}
                  </TableCell>
                  <TableCell align="right">{doctor.first_name}</TableCell>
                  <TableCell align="right">{doctor.last_name}</TableCell>
                  <TableCell align="right"><Link to={`${match.url}/${doctor.id}`}><EditIcon /></Link></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>)
        : <CircularProgress />}
    </>
  );
}