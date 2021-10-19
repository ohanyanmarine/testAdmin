import { Avatar, Button, Paper, Typography, TextField, CircularProgress } from "@mui/material";
import { blue, green, grey } from "@mui/material/colors";

import hook from "./hook";

export default () => {
  const { doctor, isEdit, setIsEdit, update,sendDate } = hook()
  return (
    <div className="paper-div">
      <Paper elevation={3}>
        <div className="paper">
          <Avatar
            alt={`${doctor?.first_name}`}
            src={`${doctor?.profile_image}`}
            sx={{ width: 110, height: 110 }}
          />
          {isEdit ? (
            <div>
              <form>
                <TextField label="Fisrt Name" value={doctor?.first_name} variant="standard"
                  onChange={(event) => {
                    update("first_name", event.target.value)
                  }}
                />
                <TextField label="Last Name" value={doctor?.last_name} variant="standard" />
                
              </form>
            </div>
          )
            : (
              <div>
                <Typography sx={{ fontWeight: "bold", fontSize: 18 }}>
                  {doctor?.first_name} {doctor?.last_name}
                </Typography>
                <Typography sx={{ fontWeight: "bold", fontSize: 14 }}>
                  Date of birth {doctor?.date_of_birth}
                </Typography>
                <Typography
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    pt: 2,
                    pb: 2
                  }}
                >
                  <Typography sx={{ fontWeight: "bold", color: green[700] }}>
                    Price ${doctor?.price}
                  </Typography>
                </Typography>
                <Typography sx={{ fontWeight: "bold" }}>
                  Country - {doctor.country_code?.country_name?.en}
                </Typography>
                <Typography sx={{ fontWeight: "bold" }}>
                  Category - {doctor?.user_categories ? doctor?.user_categories[0]?.category?.description?.en : <CircularProgress />}
                </Typography>
              </div>
            )

          }

        </div>
        <Button onClick={() => {
          setIsEdit(!isEdit)
        }}>Edit</Button>
        <Button onClick={() => {
          sendDate()
        }}>Save</Button>
      </Paper>
    </div>
  )
}