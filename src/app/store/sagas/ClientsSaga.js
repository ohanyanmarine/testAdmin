import { takeLatest, call, put } from "redux-saga/effects";
import { ClientsTypes } from "../types";
import { clientsRequest } from "../../services/api/routes/clients";
import { setClientsAction } from "../actions";

function* getClients() {
  try {
    const clients = yield call(clientsRequest);
    yield put(setClientsAction(clients.results));
    console.log(clients.result);
  } catch (error) {
    console.log(error);
  }
}

function* watchClientsSaga() {
  yield takeLatest(ClientsTypes.GET_CLIENTS, getClients);
}
export { watchClientsSaga };
