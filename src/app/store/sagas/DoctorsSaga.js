import { takeLatest, call, put } from "redux-saga/effects";
import { DoctorsTypes } from "../types";
import { doctorsRequest } from "../../services/api/routes/doctors";
import { setDoctorsAction } from "../actions";

function* getDoctors() {
  try {
    const doctors = yield call(doctorsRequest);
    yield put(setDoctorsAction(doctors.results));
    console.log("dictors are", doctors.result);
  } catch (error) {
    console.log(error);
  }
}

function* watchDoctorsSaga() {
  yield takeLatest(DoctorsTypes.GET_DOCTORS, getDoctors);
}
export { watchDoctorsSaga };
