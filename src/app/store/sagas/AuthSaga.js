import { takeLatest, call } from "redux-saga/effects";
import api from "../../services/api";
import { loginRequest } from "../../services/api/routes/auth";
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
      window.location = "/panel";
    }
  } catch (error) {
    console.log(error.message);
  }
}
function* watchAuthSaga() {
  yield takeLatest(AuthTypes.LOGIN, login);
}

export { watchAuthSaga };
