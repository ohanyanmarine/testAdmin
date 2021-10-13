import * as React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import { loginAction } from "../../store/actions";
import { isAuthSelector } from "../../store/selectors";

export default () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const history = useHistory();
  const isAuth = useSelector(isAuthSelector);
  useEffect(() => {
    if (isAuth) {
      history.push("/panel");
    }
  }, [isAuth]);
  const Submit = (data) => {
    dispatch(loginAction(data));
  };
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return {
    register,
    handleSubmit,
    errors,
    Submit,
    values,
    setValues,
    handleChange,
    handleClickShowPassword,
    handleMouseDownPassword
  };
};
