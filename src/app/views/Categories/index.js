import { CircularProgress, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import React from "react"
import hook from "./hook";

const Catagories = ({ loaded }) => {
    const { categories,deleteHandler } = hook();
    return <div>
        Categories
        {categories ?
            (<TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">ID</TableCell>
                            <TableCell align="right">Название</TableCell>
                            <TableCell align="right">Описание</TableCell>
                            <TableCell align="right">Edit</TableCell>
                            <TableCell align="right">Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {categories.map((category, index) => (
                            <TableRow
                                key={index}
                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                            >
                                <TableCell align="right">{category.id}</TableCell>
                                <TableCell align="right">{category.title.en}</TableCell>
                                <TableCell align="right">{category.description.en}</TableCell>
                                <TableCell align="right"><EditIcon /></TableCell>
                                <TableCell align="right">
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

