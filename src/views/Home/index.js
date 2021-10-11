import { Button } from "@mui/material";
import { indigo } from "@mui/material/colors";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="wrapper">
      <div className="content-home">
        <h1>This is home page</h1>
        <Link to="/login">
          <Button
            variant="outlined"
            sx={{ color: indigo[500], bgcolor: indigo[200] }}
          >
            Sign in
          </Button>
        </Link>
      </div>
    </div>
  );
};
