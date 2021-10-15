import { AuthTypes } from "../types";

const INIT_STATE = {
  isAuth: false,
  isAuthError: false,
  errorMessage: "",
  user: null
};

export default (state = INIT_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    // case AuthTypes.LOGIN:
    //   return state;
    case AuthTypes.AUTH_SUCCESS:
      return { ...state, isAuth: true };
    case AuthTypes.SET_ERROR_MESSAGE:
      return {...state, errorMessage: payload}
    case AuthTypes.SET_ME: 
      return {...state, user: payload}
    default:
      break;
  }
  return state;
};
