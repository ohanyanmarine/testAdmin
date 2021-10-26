import { ClientsTypes } from "../types";

export const getClientsAction = () => {
  return {
    type: ClientsTypes.GET_CLIENTS
  };
};

export const setClientsAction = (payload) => {
  return {
    type: ClientsTypes.SET_CLIENTS,
    payload
  };
};
