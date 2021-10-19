import { call, put, takeLatest } from "@redux-saga/core/effects";
import { deleteCategoryRequest, getCategoriesRequest } from "../../services/api/routes/utils";
import { getCategoriesActions, setCategoriesActions } from "../actions";
import { CategoriesTypes } from "../types";

function* getCategories() {
    try {
      const categories = yield call(getCategoriesRequest);     
      yield put(setCategoriesActions(categories.results));
      } catch (error) {
      console.log(error);
    }
}
function* deleteCategory({payload}) {
    const {catagoryId} = payload;
    try {
      const categories = yield call(deleteCategoryRequest,catagoryId);     
      yield put(getCategoriesActions())
      // yield put(setCategoriesActions(categories.results));
      } catch (error) {
      console.log(error);
    }
}

function* watchCategoriesSaga() {
    yield takeLatest(CategoriesTypes.GET_CATEGORIES, getCategories);
    yield takeLatest(CategoriesTypes.DELETE_CATEGORY, deleteCategory);

  //  yield takeLatest(DoctorsTypes.UPDATE_DOCTOR, updateDoctor);
    
  }
  export { watchCategoriesSaga };