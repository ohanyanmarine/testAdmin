import * as React from "react";
import hook from "./hook";
import EditIcon from "@mui/icons-material/Edit";
import { Button, CircularProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { blue, grey } from "@mui/material/colors";

export default () => {
    const { clients, match } = hook();
    return (
        <>
      <div className="main-header">
        <div>
          <h1>Клиенты</h1>
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
      {clients ?
        (<TableContainer component={Paper}>
          <Table sx={{  width: "100%", minWidth: 650 }} aria-label="simple table">
            <TableHead sx={{ bgcolor: grey[50]}}>
              <TableRow>
                <TableCell  sx={{ border: 1, borderColor: grey[200], fontWeight: "bold"}}>N</TableCell>
                <TableCell align="left"  sx={{ border: 1, borderColor: grey[200], fontWeight: "bold"}}>Имя</TableCell>
                <TableCell align="lef"  sx={{ border: 1, borderColor: grey[200], fontWeight: "bold"}}>Email</TableCell>
                <TableCell align="left"  sx={{ border: 1, borderColor: grey[200], fontWeight: "bold"}}>Номер телефона</TableCell>
                <TableCell align="left"  sx={{ border: 1, borderColor: grey[200], fontWeight: "bold"}}>Пол</TableCell>
                <TableCell align="left"  sx={{ border: 1, borderColor: grey[200], fontWeight: "bold"}}>Дата рождения</TableCell>
                <TableCell align="left"  sx={{ border: 1, borderColor: grey[200], fontWeight: "bold"}}>О себе</TableCell>
                <TableCell align="left" sx={{ border: 1, borderColor: grey[200], fontWeight: "bold"}}>Edit</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {clients.map((client, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row" sx={{ border: 1, borderColor: grey[200]}}>
                    {index+1}
                  </TableCell>
                  <TableCell align="left"  sx={{ border: 1, borderColor: grey[200]}}>{client.first_name} {client.last_name}</TableCell>
                  <TableCell align="left"  sx={{ border: 1, borderColor: grey[200]}}>{client.email}</TableCell>
                  <TableCell align="left"  sx={{ border: 1, borderColor: grey[200]}}>{client.phone_number}</TableCell>
                  <TableCell align="left" sx={{ border: 1, borderColor: grey[200]}}>{client.gender_details?.title.en}</TableCell>
                  <TableCell align="left" sx={{ border: 1, borderColor: grey[200]}}>{client.date_of_birth}</TableCell>
                  <TableCell align="left" sx={{ border: 1, borderColor: grey[200]}}>{client.about}</TableCell>
                  <TableCell align="left" sx={{ border: 1, borderColor: grey[200]}}><Link to={`${match.url}/${client.id}`}><EditIcon /></Link></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>)
        : <CircularProgress />}
    </>
 
    )
}