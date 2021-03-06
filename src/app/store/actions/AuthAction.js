import { AuthTypes } from "../types";
export const loginAction = ({ username, password }) => {
  return {
    type: AuthTypes.LOGIN,
    payload: { username, password }
  };
};

export const authSuccessAction = () => {
  return {
    type: AuthTypes.AUTH_SUCCESS
  };
};

export const setErrorMessage = (payload) =>{
  return {
    type: AuthTypes.SET_ERROR_MESSAGE,
    payload
  }
}

export const getMeAction =()=>{
  return {
    type: AuthTypes.GET_ME
  }
}

export const setMeAction = (payload) => {
  return {
    type: AuthTypes.SET_ME,
    payload
  }
}
