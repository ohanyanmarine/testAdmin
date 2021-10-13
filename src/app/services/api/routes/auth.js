import api from "..";

export const loginRequest = async (username, password) => {
  try {
    const responce = await api.post("login/login/", {
      username,
      password
    });
    return responce.data;
  } catch (error) {
    if (error.response) {
      throw error.response.data;
    }
    throw error;
  }
};
