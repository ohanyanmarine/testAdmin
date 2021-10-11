import { AuthTypes } from "../types";

export default (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case AuthTypes.LOGIN:
      console.log(payload);
      return state;

    default:
      break;
  }
  return state;
};
