import { all } from "redux-saga/effects";
import { watchAuthSaga } from "./AuthSaga";
import { watchCategoriesSaga } from "./CategoriesSaga";
import { watchClientsSaga } from "./ClientsSaga";
import { watchDoctorsSaga } from "./DoctorsSaga";
import { watchFeedbacksSaga } from "./FeedbackSaga";

function* rootSaga() {
  yield all([watchAuthSaga(), watchDoctorsSaga(),watchCategoriesSaga(), watchClientsSaga(), watchFeedbacksSaga()]);
}

export default rootSaga;
