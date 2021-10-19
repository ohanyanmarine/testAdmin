import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCategoriesActions } from "../../store/actions"
import { deleteCategoryActions } from "../../store/actions/CategoriesActions"
import { categoriesSelector } from "../../store/selectors/CategoriesSelector"

export default ()=>{
    const dispatch = useDispatch()
    const categories = useSelector(categoriesSelector)
    useEffect(()=>{
        dispatch(getCategoriesActions())
    },[]);
    const deleteHandler = (id)=>{
        console.log(id);
        dispatch(deleteCategoryActions(id))
        //id = 12
    }
    return {categories,deleteHandler}
}