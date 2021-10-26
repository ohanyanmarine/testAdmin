import { FeedbackTypes } from "../types";

const INIT_STATE = {
  feedbacks: null,
  selected: {}
};

export default (state = INIT_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case FeedbackTypes.SET_FEEDBACK:
      return { ...state, feedbacks: payload };
    // case FeedbackTypes.SELECT_FEEDBACK:
    //   const feedback = state.feedbacks.find((item) => {
    //     item.id === parseInt(payload);
    //   });
    //   return { ...state, selected: feedback ? feedback : {} };

    default:
      break;
  }
  return state;
};
