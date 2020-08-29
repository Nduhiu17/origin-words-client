import { takeEvery, put, call, select } from 'redux-saga/effects'

import { setSnackbar } from '../reducers/snackbarReducer'

import { CREATE_CATEGORY } from '../constants'
import { createCategory } from '../api'
import { setError } from '../actions/createCategoryActions'

const getCategoryRequest = state =>
  state.categoryCreateRequest.categoryCreateRequest

function* handleCategoryCreate() {
  const categoryData = yield select(getCategoryRequest)
  try {
    const categoryMessage = yield call(createCategory, categoryData)
    yield put(setSnackbar(true, 'success', categoryMessage.message))
  } catch (error) {
    // dispatch error
    yield put(setError(error.toString()))
    yield put(setSnackbar(true, 'error', error.toString()))
  }
}

export default function* watchCreateCategory() {
  yield takeEvery(CREATE_CATEGORY.CREATE_REQUEST, handleCategoryCreate)
}
