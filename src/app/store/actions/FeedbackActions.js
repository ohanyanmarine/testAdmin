import { FeedbackTypes } from "../types";

export const getFeedbackAction = () => {
  return {
    type: FeedbackTypes.GET_FEEDBACK
  };
};

export const setFeedbackAction = (payload) => {
  return {
    type: FeedbackTypes.SET_FEEDBACK,
    payload
  };
};

export const selectFeedback = (id) => {
  return {
    type: FeedbackTypes.SELECT_FEEDBACK,
    payload: id
  };
};
