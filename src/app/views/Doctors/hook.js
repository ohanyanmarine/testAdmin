import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useRouteMatch } from "react-router-dom"
import { getDoctorsAction } from "../../store/actions"
import { doctorsSelector } from "../../store/selectors"

export default ()=>{
    const {doctors} = useSelector(doctorsSelector);
    const match = useRouteMatch()
    const dispatch = useDispatch();
    useEffect(()=>{
        if(!doctors){
            //console.log("",getDoctorsAction());
            dispatch(getDoctorsAction());
        }
        console.log(doctors);
    },[doctors])

    return {doctors, match}
}