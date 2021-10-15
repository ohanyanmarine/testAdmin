import { Avatar, Paper, Typography } from "@mui/material";
import { blue, green, grey } from "@mui/material/colors";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams, useRouteMatch } from "react-router";
import { selectDoctor } from "../../store/actions";
import { doctorsSelector, selectedDoctor } from "../../store/selectors"

export default () => {
  const doctors = useSelector(doctorsSelector);
  const doctor = useSelector(selectedDoctor)
  const { id } = useParams();
  const match = useRouteMatch()
  const dispatch = useDispatch()

  useEffect(() => {
    if (doctors.length > 0) {
      dispatch(selectDoctor(id));
      console.log("doctor ", doctor);
    }
  }, [id, doctors]);

  return (
    <div className="paper-div">
      <Paper elevation={3}>
        <div className="paper">
          <Avatar
            alt={`${doctor.first_name}`}
            src={`${doctor.profile_image}`}
            sx={{ width: 110, height: 110 }}
          />
          <div>
            <Typography sx={{ fontWeight: "bold", fontSize: 18 }}>
              {doctor.first_name} {doctor.last_name}
            </Typography>
            <Typography sx={{ fontWeight: "bold", fontSize: 14 }}>
              Date of birth {doctor.date_of_birth}
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
                Price ${doctor.price}
              </Typography>
            </Typography>
            <Typography sx={{ fontWeight: "bold" }}>
              Country - {doctor.country_code.country_name.en}
            </Typography>
            <Typography sx={{ fontWeight: "bold" }}>
            Category - {doctor.user_categories[0].category.description.en}
            </Typography>
          </div>
        </div>
      </Paper>
    </div>
  )
}