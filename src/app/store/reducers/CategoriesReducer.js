import { CategoriesTypes } from "../types";

const INIT_STATE = {
    list:[]
}
export default (state=INIT_STATE,action)=>{
    const {type,payload} = action

    switch (type) {
        case CategoriesTypes.SET_CATEGORIES:
            return {...state,list:payload}
        default:
            return state;
    }
}