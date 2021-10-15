import { takeLatest, call, put } from "redux-saga/effects";
import api from "../../services/api";
import { getMeRequest, loginRequest } from "../../services/api/routes/auth";
import { authSuccessAction, getMeAction, setMeAction } from "../actions";
import { setErrorMessage } from "../actions/AuthAction";
import { AuthTypes } from "../types";

function* login({ payload }) {
  console.log(payload);
  const { username, password } = payload;
  try {
    const data = yield call(loginRequest, username, password);
    console.log(data);
    if (data.access) {
      localStorage.setItem("access", data.access);
      api.defaults.headers.common["Authorization"] = "Bearer " + data.access;
      //window.location = "/panel";
      yield put(authSuccessAction());
      yield put(getMeAction());
    }
  } catch (error) {
    console.log(error.message);
    yield put(setErrorMessage(error.message))
  }
}
function* getMe() {
  try {
    const userData = yield call(getMeRequest);
    yield put(setMeAction(userData));
    console.log(userData);
  } catch (error) {}
}

function* watchAuthSaga() {
  yield takeLatest(AuthTypes.LOGIN, login);
  yield takeLatest(AuthTypes.GET_ME, getMe);
}

export { watchAuthSaga };
