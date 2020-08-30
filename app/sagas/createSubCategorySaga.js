import { takeEvery, put, call, select } from 'redux-saga/effects'

import { setSnackbar } from '../reducers/snackbarReducer'

import { CREATE_SUB_CATEGORY } from '../constants'
import { createSubCategory } from '../api'
import { setError } from '../actions/createSubCategoryAction'

const getSubCategoryRequest = state => state.subCatData.subcategoryCreateRequest

const getSubCategory = state => state.selectedCat.selectedSubCat

function* handleSubCategoryCreate() {
  const subcategoryData = yield select(getSubCategoryRequest)
  const categoryId = yield select(getSubCategory)
  try {
    const categoryMessage = yield call(
      createSubCategory,
      subcategoryData,
      categoryId,
    )
    yield put(setSnackbar(true, 'success', categoryMessage.message))
  } catch (error) {
    // dispatch error
    yield put(setError(error.toString()))
    yield put(setSnackbar(true, 'error', error.toString()))
  }
}

export default function* watchSubCreateCategory() {
  yield takeEvery(CREATE_SUB_CATEGORY.CREATE_REQUEST, handleSubCategoryCreate)
}
