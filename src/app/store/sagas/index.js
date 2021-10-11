import { all } from "redux-saga/effects";
import { watchAuthSaga } from "./AuthSaga";

function* rootSaga() {
  yield all([watchAuthSaga()]);
}

export default rootSaga;
