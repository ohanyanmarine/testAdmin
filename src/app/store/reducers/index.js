import { combineReducers } from "redux";
import auth from "./AuthReducer";
import doctors from "./DoctorsReducer"
import categories from "./CategoriesReducer"
import clients from "./ClientsReducer"
import feedbacks from "./FeedbackReducer";

export default combineReducers({
  auth,
  doctors,
  categories,
  clients,
  feedbacks
});
