import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import hook from "./hook";
import EditIcon from "@mui/icons-material/Edit";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { grey } from "@mui/material/colors";

export default () => {
  const { feedbacks, feedback, match } = hook();
  const [read, setRead] = React.useState('');

  const handleChange = (event) => {
    setRead(event.target.value);
  };

  return (
    <>
     <div className="main-header">
        <div>
          <h1>Обратная связь</h1>
        </div>
        <div>
        <FormControl sx={{ m: 1,  size: "small" }}>
        <Select
          value={read}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>Все</em>
          </MenuItem>
          <MenuItem value="Прочитанные">Прочитанные</MenuItem>
          <MenuItem value="Непрочитанные">Непрочитанные</MenuItem>
        </Select>
        </FormControl>
        </div>
      </div>
      {feedbacks ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead sx={{ bgcolor: grey[50]}}>
              <TableRow sx={{ border: 1, borderColor: grey[200]}}>
                <TableCell sx={{ border: 1, borderColor: grey[200], fontWeight: "bold"}}>N</TableCell>
                <TableCell align="left" sx={{ border: 1, borderColor: grey[200], fontWeight: "bold"}}>Имя</TableCell>
                <TableCell align="left" sx={{ border: 1, borderColor: grey[200], fontWeight: "bold"}}>Телефон</TableCell>
                <TableCell align="left" sx={{ border: 1, borderColor: grey[200], fontWeight: "bold"}}>Email</TableCell>
                <TableCell align="left" sx={{ border: 1, borderColor: grey[200], fontWeight: "bold"}}> Тема</TableCell>
                <TableCell align="left" sx={{ border: 1, borderColor: grey[200], fontWeight: "bold"}}>Сообщение</TableCell>
                <TableCell align="left" sx={{ border: 1, borderColor: grey[200], fontWeight: "bold"}}>Edit</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {feedbacks.map((item, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {item.id}
                  </TableCell>
                  <TableCell align="left" sx={{ border: 1, borderColor: grey[200]}}>{item.name}</TableCell>
                  <TableCell align="left" sx={{ border: 1, borderColor: grey[200]}}>{item.email}</TableCell>
                  <TableCell align="left" sx={{ border: 1, borderColor: grey[200]}}>{item.phone_number}</TableCell>
                  <TableCell align="left" sx={{ border: 1, borderColor: grey[200]}}>{item.subject}</TableCell>
                  <TableCell align="left" sx={{ border: 1, borderColor: grey[200]}}>{item.message}</TableCell>
                  <TableCell align="left" sx={{ border: 1, borderColor: grey[200]}}>
                    <Link to={`${match.url}/${item.id}`}>
                      <EditIcon />
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        "loading"
      )}
    </>
  );
};
