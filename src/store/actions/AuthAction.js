import { AuthTypes } from "../types";

export const loginAction = ({ username, password }) => {
  return {
    type: AuthTypes.LOGIN,
    payload: {
      username,
      password
    }
  };
};
