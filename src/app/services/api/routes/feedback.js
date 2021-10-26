import api from "..";

export const feedbackRequest = async () => {
  try {
    const responce = await api.get(
      "/utils/feedback/?limit=20&offset=0&is_seen="
    );
    return responce.data;
  } catch (error) {
    if (error.response) {
      throw error.response.data;
    }
    throw error;
  }
};
