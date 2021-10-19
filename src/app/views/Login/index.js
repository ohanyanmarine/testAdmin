import * as React from "react";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import { Button, IconButton } from "@mui/material";
import { blue, indigo } from "@mui/material/colors";
import hook from "./hook";
import { useSelector } from "react-redux";
import { errorMessageSelector } from "../../store/selectors/AuthSelector";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';

export default function InputWithIcon() {
  const {
    register,
    handleSubmit,
    errors,
    Submit,
  } = hook();
  const errorMessage = useSelector(errorMessageSelector)

  return (
    <div className="wrapper">
      <div className="content">
        <div className="title">
          <h1>Телемедецина</h1>
        </div>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '100%' },
          }}
          onSubmit={handleSubmit(Submit)}
        >
          {errorMessage ? <i style={{ color: "red" }}>{errorMessage}</i> : null}
          <TextField defaultValue="123456789" size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonOutlineIcon />
                </InputAdornment>
              ),
            }}
            {...register("username", {
              required: true
            })} />

          <div className="input-item">
            {errors.username?.type === "required" && (
              <i>Username is required</i>
            )}
          </div>
          <Box>
            <TextField
              type="password" size="small"
              defaultValue="123456789"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOpenIcon />
                  </InputAdornment>
                ),
              }}

              {...register("password", {
                required: true
              })}
            />
          </Box>
          <div className="input-item">
            {errors.password?.type === "required" && (
              <i>Password is required</i>
            )}
          </div>
          <Button
            type="submit" size="small"
            variant="contained"
            sx={{ color: "white", bgcolor: blue[200], borderColor: blue[200], mt: 3, width: "100%" }}
          >
            Войти
          </Button>
        </Box>
      </div>
    </div>
  );
}
