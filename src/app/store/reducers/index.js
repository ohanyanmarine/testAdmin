import { combineReducers } from "redux";
import auth from "./AuthReducer";
import doctors from "./DoctorsReducer"

export default combineReducers({
  auth,
  doctors
});
