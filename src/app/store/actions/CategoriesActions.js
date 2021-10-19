import { CategoriesTypes } from "../types"

export const getCategoriesActions = ()=>{
    return {
        type:CategoriesTypes.GET_CATEGORIES
    }
}
export const setCategoriesActions = (payload)=>{
    return {
        type:CategoriesTypes.SET_CATEGORIES,
        payload
    }
}
export const deleteCategoryActions = (catagoryId)=>{
    return {
        type:CategoriesTypes.DELETE_CATEGORY,
        payload:{catagoryId}
    }
}