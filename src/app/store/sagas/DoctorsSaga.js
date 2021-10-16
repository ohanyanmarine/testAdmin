import { takeLatest, call, put,select } from "redux-saga/effects";
import { DoctorsTypes } from "../types";
import { doctorsRequest, updateDoctorRequest } from "../../services/api/routes/doctors";
import { getDoctorsAction, setDoctorsAction } from "../actions";
import { selectedDoctor } from "../selectors";

function* getDoctors() {
  try {
    const doctors = yield call(doctorsRequest);
    yield put(setDoctorsAction(doctors.results));
    } catch (error) {
    console.log(error);
  }
}
function* updateDoctor(){
  try {
      const doctor = yield select(selectedDoctor);
      const {country_code,id,user_categories,slots,...data} = doctor;
    ;
    const categories = user_categories.map((item)=>{
      return {
        id:item.category.id
      }
    })
    console.log(categories);
      yield call(updateDoctorRequest,id,{...data,categories, interval_changed:true})
      yield put(getDoctorsAction())
  } catch (error) {
    console.log(error);
  }
}

function* watchDoctorsSaga() {
  yield takeLatest(DoctorsTypes.GET_DOCTORS, getDoctors);
  yield takeLatest(DoctorsTypes.UPDATE_DOCTOR, updateDoctor);
  
}
export { watchDoctorsSaga };
