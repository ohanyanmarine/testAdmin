import { combineReducers } from "redux";
import auth from "./AuthReducer";
import doctors from "./DoctorsReducer"
import categories from "./CategoriesReducer"


export default combineReducers({
  auth,
  doctors,
  categories
});
