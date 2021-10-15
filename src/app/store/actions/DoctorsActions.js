import { DoctorsTypes } from "../types";

export const getDoctorsAction = () => {
  return {
    type: DoctorsTypes.GET_DOCTORS
  };
};

export const setDoctorsAction = (payload) => {
  return {
    type: DoctorsTypes.SET_DOCTORS,
    payload
  };
};
export const selectDoctor = (id)=>{
    return {
        type: DoctorsTypes.SELECT_DOCTOR,
        payload: id
    }
}
