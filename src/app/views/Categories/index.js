import { Button, CircularProgress, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import React from "react"
import hook from "./hook";
import { Link } from "react-router-dom";
import { blue, grey } from "@mui/material/colors";

const Catagories = ({ loaded }) => {
    const { categories,deleteHandler, match } = hook();
    return <div>
        <div className="main-header">
        <div>
          <h1>Категории</h1>
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
        {categories ?
            (<TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead sx={{ bgcolor: grey[50] }}>
                        <TableRow sx={{ border: 1, borderColor: grey[200] }}>
                            <TableCell align="left" sx={{ border: 1, borderColor: grey[200], fontWeight: "bold" }} >ID</TableCell>
                            <TableCell align="left" sx={{ border: 1, borderColor: grey[200], fontWeight: "bold" }}>Название</TableCell>
                            <TableCell align="left" sx={{ border: 1, borderColor: grey[200], fontWeight: "bold" }}>Описание</TableCell>
                            <TableCell align="left" sx={{ border: 1, borderColor: grey[200], fontWeight: "bold" }}>Edit</TableCell>
                            <TableCell align="left" sx={{ border: 1, borderColor: grey[200], fontWeight: "bold" }}>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {categories.map((category, index) => (
                            <TableRow
                                key={index}
                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                                <TableCell align="left" sx={{ border: 1, borderColor: grey[200] }}>{category.id}</TableCell>
                                <TableCell align="left" sx={{ border: 1, borderColor: grey[200] }}>{category.title.en}</TableCell>
                                <TableCell align="left" sx={{ border: 1, borderColor: grey[200] }}>{category.description.en}</TableCell>
                                <TableCell align="left" sx={{ border: 1, borderColor: grey[200] }}><EditIcon /></TableCell>
                                <TableCell align="left" sx={{ border: 1, borderColor: grey[200] }}>
                                    <IconButton aria-label="delete"
                                        onClick={()=>{
                                            deleteHandler(category.id)
                                        }}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>)
            : <CircularProgress />}
    </div>
}


export default Catagories

