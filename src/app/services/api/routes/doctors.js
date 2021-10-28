import api from "..";

export const doctorsRequest = async ()=>{
    try {
        const responce = await api.get("users/user/?limit=20&offset=0&role=doctor")
        return responce.data
    } catch (error) {
        if( error.response){
            throw error.response.data; 
        }
        throw error
    }
    
}

export const updateDoctorRequest = async (id,date)=>{
    try {
        const responce = await api.post(`users/doctor-edit/${id}/`,date)
        return responce.data
    } catch (error) {
        if( error.response){
            throw error.response.data; 
        }
        throw error
    } 
}

export const addDoctorRequest = async (date) => {
    try {
      const responce = await api.post(`users/doctor-add/`, date);
      return responce.data;
    } catch (error) {
      if (error.response) {
        throw error.response.data;
      }
      throw error;
    }
  };
