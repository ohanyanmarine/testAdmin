import * as React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useRouteMatch } from "react-router-dom";
import { getFeedbackAction, selectFeedback } from "../../store/actions";
import { feedbacksSelector, selectedFeedback } from "../../store/selectors";

export default () => {
  const feedbacks = useSelector(feedbacksSelector);
  const match = useRouteMatch();
  const dispatch = useDispatch();
  const feedback = useSelector(selectedFeedback);
  const { id } = useParams();

  React.useEffect(() => {
    if (!feedbacks) {
      dispatch(getFeedbackAction());
    } else if (feedbacks.length > 0) {
      dispatch(selectFeedback(id));
      console.log(feedback);
    }
  }, [id, feedbacks]);

  return { feedbacks, feedback, match };
};
