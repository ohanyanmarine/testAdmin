import { DoctorsTypes } from "../types";

const INIT_STATE = {
  doctors: null,
  selected: {}
};

export default (state = INIT_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case DoctorsTypes.SET_DOCTORS:
      return { ...state, doctors: payload };
    case DoctorsTypes.SELECT_DOCTOR:
        const doctor = state.doctors.find((item)=>{
           return item.id === parseInt(payload);
        })
        return {...state, selected: doctor ? doctor : {}}
    default:
        return state;
  }
  
};
