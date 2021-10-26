import { ClientsTypes } from "../types";

const INIT_STATE = {
  clients: null
  };

export default (state = INIT_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case ClientsTypes.SET_CLIENTS:
      return { ...state, clients: payload };

    default:
      return state;
  }
};
