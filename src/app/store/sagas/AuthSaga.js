import { takeLatest, call, put } from "redux-saga/effects";
import api from "../../services/api";
import { loginRequest } from "../../services/api/routes/auth";
import { authSuccessAction } from "../actions";
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
    }
  } catch (error) {
    console.log(error.message);
    yield put(setErrorMessage(error.message))
  }
}
function* watchAuthSaga() {
  yield takeLatest(AuthTypes.LOGIN, login);
}

export { watchAuthSaga };
