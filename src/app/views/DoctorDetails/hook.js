import { useEffect, useState,useRef } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams, useRouteMatch } from "react-router";
import { getDoctorsAction, selectDoctor } from "../../store/actions";
import { changeDoctorAction, updateDoctorAction } from "../../store/actions/DoctorsActions";
import { doctorsSelector, selectedDoctor } from "../../store/selectors"
export default ()=>{
  const doctors = useSelector(doctorsSelector);
  const doctor = useSelector(selectedDoctor)
  const { id } = useParams();
  const match = useRouteMatch()
  const dispatch = useDispatch()
  const [isEdit,setIsEdit] = useState(false);
  const prevDoctor = useRef()
  useEffect(() => {
    if(!doctors){
      dispatch(getDoctorsAction())
    }else 
    if (doctors.length > 0) {
      dispatch(selectDoctor(id));
      console.log("doctor ", doctor);
    }
  }, [id, doctors]);
  useEffect(()=>{
    if(doctor && !prevDoctor.current){
        prevDoctor.current = doctor
    }
  },doctor)
  const reset = ()=>{
    dispatch(changeDoctorAction(prevDoctor.current)) 
  }
  const update = (key,value)=>{
    dispatch(changeDoctorAction({
        [key]:value
    }))
  }
  const sendDate = ()=>{
      dispatch(updateDoctorAction())
  }
  return {doctor,isEdit,setIsEdit,update,sendDate} 
}