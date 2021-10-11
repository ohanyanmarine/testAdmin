import * as React from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Button, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { indigo } from "@mui/material/colors";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import hook from "./hook";

export default function InputWithIcon() {
  const { register,
    handleSubmit,
    submit,
    handleChange,
    handleClickShowPassword,
    handleMouseDownPassword,
    values
  } = hook();

  return (
    <div className="wrapper">
      <div className="back-icon">
        <Link to="/">
          <ArrowBackIosIcon />
        </Link>
      </div>
      <div className="content">
        <div className="title">
          <h1>DOCTORS</h1>
        </div>
        <form className="form" onSubmit={handleSubmit(submit)}>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField
              id="input-with-sx"
              label="Username"
              variant="standard"
              {...register("username", {
                required: true
              })}
            />
          </Box>
          <Box>
            <FormControl sx={{ m: 1, width: "25ch" }} variant="standard">
              <InputLabel htmlFor="standard-adornment-password">
                Password
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                {...register("password", {
                  required: true
                })}
                onChange={handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Box>
          <Box sx={{mt: 5}}>
            <Button
              type="submit"
              variant="outlined"
              sx={{ color: indigo[500], bgcolor: indigo[200] }}
            >
              Sign in
            </Button>
          </Box>
        </form>
      </div>
    </div>
  );
}
