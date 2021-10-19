import * as React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { loginAction } from "../../store/actions";
import { isAuthSelector } from "../../store/selectors";

export default () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();
  const isAuth = useSelector(isAuthSelector);
  useEffect(() => {
    if (isAuth) {
      history.push("/panel/doctors");
    }
  }, [isAuth]);
  const Submit = (data) => {
    dispatch(loginAction(data));
  };
  
 return {
    register,
    handleSubmit,
    errors,
    Submit,
    };
};
