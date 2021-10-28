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
import { blue, grey } from "@mui/material/colors";

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
          <Table sx={{ width: "100%" }} aria-label="simple table">
            <TableHead sx={{ bgcolor: grey[50] }}>
              <TableRow sx={{ border: 1, borderColor: grey[200] }}>
                <TableCell sx={{ border: 1, borderColor: grey[200], fontWeight: "bold" }}>N</TableCell>
                <TableCell align="left" sx={{ border: 1, borderColor: grey[200], fontWeight: "bold" }}>Имя</TableCell>
                <TableCell align="left" sx={{ border: 1, borderColor: grey[200], fontWeight: "bold" }}>Email</TableCell>
                <TableCell align="left" sx={{ border: 1, borderColor: grey[200], fontWeight: "bold" }}>Номер телефона</TableCell>
                <TableCell align="left" sx={{ border: 1, borderColor: grey[200], fontWeight: "bold" }}>Образование</TableCell>
                <TableCell align="left" sx={{ border: 1, borderColor: grey[200], fontWeight: "bold" }}>Специализируется</TableCell>
                <TableCell align="left" sx={{ border: 1, borderColor: grey[200], fontWeight: "bold" }}>Прод. консультации</TableCell>
                <TableCell align="left" sx={{ border: 1, borderColor: grey[200], fontWeight: "bold" }}>Прод. постоновления</TableCell>
                <TableCell align="left" sx={{ border: 1, borderColor: grey[200], fontWeight: "bold" }}>Цена</TableCell>
                <TableCell align="left" sx={{ border: 1, borderColor: grey[200], fontWeight: "bold" }}>Edit</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {doctors.map((doctor, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell align="left" sx={{ border: 1, borderColor: grey[200] }}>{doctor.first_name} {doctor.last_name}</TableCell>
                  <TableCell align="left" sx={{ border: 1, borderColor: grey[200] }}>{doctor.email}</TableCell>
                  <TableCell align="left" sx={{ border: 1, borderColor: grey[200] }}>{doctor.phone_number}</TableCell>
                  <TableCell align="left" sx={{ border: 1, borderColor: grey[200] }}>{doctor?.doctor_details?.education.slice(0, 20)}</TableCell>
                  <TableCell align="left" sx={{ border: 1, borderColor: grey[200] }}>{doctor?.doctor_details?.experience.slice(0, 20)}</TableCell>
                  <TableCell align="left" sx={{ border: 1, borderColor: grey[200] }}>{doctor?.doctor_details?.consultation_duration}</TableCell>
                  <TableCell align="left" sx={{ border: 1, borderColor: grey[200] }}>{doctor?.doctor_details?.epicrise_duration}</TableCell>
                  <TableCell align="left" sx={{ border: 1, borderColor: grey[200] }}>{doctor?.doctor_details?.price}</TableCell>
                  <TableCell align="left" sx={{ border: 1, borderColor: grey[200] }}><Link to={`${match.url}/${doctor.id}`}><EditIcon /></Link></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>)
        : <CircularProgress />}
    </>
  );
}