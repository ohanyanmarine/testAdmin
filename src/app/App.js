import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import Login from "./views/Login";
import Panel from "./views/Panel"
import { useDispatch } from "react-redux";
import PrivatePage from "./views/PrivatePage";
import { useEffect, useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import { authSuccessAction, getMeAction } from "./store/actions";
import api from "./services/api";


export default function App() {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let access = localStorage.getItem("access");
    if (access) {
      api.defaults.headers.common["Authorization"] = "Bearer " + access;
      dispatch(authSuccessAction());
      dispatch(getMeAction());
    }
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <LinearProgress />
      ) : (
        <Router>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/panel">
              <PrivatePage>
                <Panel></Panel>
              </PrivatePage>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      )}
    </div>
  );
}
