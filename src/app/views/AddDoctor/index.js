import { TextField } from "@mui/material"
import { bgcolor, Box } from "@mui/system"

export default () => {
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div className="input-div-top">
                <div className="input-item-add" >
                    <label>Имя</label>
                    <TextField
                        required
                        id="outlined-required"
                        size="small"
                        sx={{ bgcolor: "white" }}
                    />
                </div>
                <div className="input-item-add" >
                    <label >Фамилия</label>
                    <TextField
                        required
                        id="outlined-required"
                        size="small"
                        sx={{ bgcolor: "white" }}
                    />
                </div>
                <div className="input-item-add" >
                    <label for="email">Email</label>
                    <TextField
                        required
                        id="outlined-required"
                        size="small"
                        sx={{ bgcolor: "white", width: "100px"  }}
                    />
                </div>
            </div>
        </Box>
    )
}
