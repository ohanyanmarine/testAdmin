import { all } from "redux-saga/effects";
import { watchAuthSaga } from "./AuthSaga";
import { watchCategoriesSaga } from "./CategoriesSaga";
import { watchDoctorsSaga } from "./DoctorsSaga";

function* rootSaga() {
  yield all([watchAuthSaga(), watchDoctorsSaga(),watchCategoriesSaga()]);
}

export default rootSaga;
