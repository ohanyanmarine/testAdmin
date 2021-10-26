import api from "..";

export const clientsRequest = async () => {
  try {
    const responce = await api.get(
      "users/user/?limit=20&offset=0&role=client"
    );
    return responce.data;
  } catch (error) {
    if (error.response) {
      throw error.response.data;
    }
    throw error;
  }
};
