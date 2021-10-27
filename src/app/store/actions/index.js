import { loginAction, authSuccessAction, getMeAction, setMeAction } from "./AuthAction";
import { getDoctorsAction, setDoctorsAction, selectDoctor, getAddDoctorDataAction, setAddDoctorDataAction } from "./DoctorsActions";
import {getCategoriesActions,setCategoriesActions} from "./CategoriesActions"
import { getClientsAction, setClientsAction } from "./ClientsActions";
import {getFeedbackAction, setFeedbackAction, selectFeedback} from "./FeedbackActions";


export {
  loginAction,
  authSuccessAction,
  getMeAction,
  setMeAction,
  getDoctorsAction,
  setDoctorsAction,
  selectDoctor,
  getCategoriesActions,
  setCategoriesActions,
  getClientsAction,
  setClientsAction,
  getFeedbackAction,
  setFeedbackAction,
  selectFeedback,
  getAddDoctorDataAction,
  setAddDoctorDataAction
};
