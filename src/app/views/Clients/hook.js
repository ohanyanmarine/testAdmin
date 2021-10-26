import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import { getClientsAction } from "../../store/actions";
import { clientsSelector } from "../../store/selectors";

export default () => {
  const clients = useSelector(clientsSelector);
  const match = useRouteMatch();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!clients) {
      dispatch(getClientsAction());
    }
    console.log(clients);
  }, [clients]);

  return { clients, match };
};
