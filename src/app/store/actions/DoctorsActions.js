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
export const changeDoctorAction = (payload) => {
  return {
    type: DoctorsTypes.CHANGE_DOCTOR,
    payload
  };
};
export const updateDoctorAction = () => {
  return {
    type: DoctorsTypes.UPDATE_DOCTOR
  };
};
export const selectDoctor = (id)=>{
    return {
        type: DoctorsTypes.SELECT_DOCTOR,
        payload: id
    }
}

export const getAddDoctorDataAction = (payload) => {
  return {
    type: DoctorsTypes.GET_ADD_DOCTOR_DATA
  }
}
export const setAddDoctorDataAction = (payload) =>{
  return {
    type: DoctorsTypes.SET_ADD_DOCTOR_DATA,
    payload
  }
}
