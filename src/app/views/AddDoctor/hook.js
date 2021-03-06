import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router";
import { addDoctorAction, getDoctorsAction } from "../../store/actions";


export default ()=>{
    const dispatch = useDispatch()
    const match = useRouteMatch()
    //const doctor = useSelector(doctor)

    useEffect(()=>{
        dispatch(getDoctorsAction())
    },[]);
 
    const onSubmit = (data) => {
        console.log(data);
        if (data) {
          dispatch(addDoctorAction(data));
          }
      };
    return { match, onSubmit}
}