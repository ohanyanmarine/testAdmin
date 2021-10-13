import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import Login from "./views/Login";
import Panel from "./views/Panel"
import { Provider } from "react-redux";
import store from "./store";
import PrivatePage from "./views/PrivatePage";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
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
      </div>
    </Provider>
  );
}
