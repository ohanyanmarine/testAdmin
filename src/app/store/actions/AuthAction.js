import { AuthTypes } from "../types";

export const loginAction = ({userName, password})=>{
    return {
        type: AuthTypes.LOGIN,
        payload: {
            userName,
            password
        }
    }
}