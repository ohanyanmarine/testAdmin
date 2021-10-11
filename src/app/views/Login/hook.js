import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import api from "../../services/api";
import { loginAction } from "../../store/actions";

export default () => {
  const { register, handleSubmit } = useForm();
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
  const dispatch = useDispatch();
  const submit = (data) => {
    console.log(data);
    dispatch(loginAction(data));
  };

  return { register, handleSubmit, submit, handleChange, handleClickShowPassword, handleMouseDownPassword, values, setValues };
};
