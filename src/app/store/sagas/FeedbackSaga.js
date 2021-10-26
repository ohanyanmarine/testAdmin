import { takeLatest, call, put } from "redux-saga/effects";
import { FeedbackTypes } from "../types";
import { feedbackRequest } from "../../services/api/routes/feedback";
import { setFeedbackAction } from "../actions";

function* getFeedbacks() {
  try {
    const feedbacks = yield call(feedbackRequest);
    yield put(setFeedbackAction(feedbacks.results));
    console.log(feedbacks.result);
  } catch (error) {
    console.log(error);
  }
}

function* watchFeedbacksSaga() {
  yield takeLatest(FeedbackTypes.GET_FEEDBACK, getFeedbacks);
}
export { watchFeedbacksSaga };
