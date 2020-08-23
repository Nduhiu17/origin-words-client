import { takeEvery, put, call } from 'redux-saga/effects'
import { SUB_CATEGORIES } from '../constants'
import { fetchSubcategories } from '../api'
import { setSnackbar } from '../reducers/snackbarReducer'
import { setSubcategories, setError } from '../actions/subcategoriesAction'

function* handleSubcategoriesLoad() {
  try {
    const subcategories = yield call(fetchSubcategories)
    yield put(setSubcategories(subcategories))
  } catch (error) {
    // dispatch error
    yield put(setError(error.toString()))
    yield put(setSnackbar(true, 'error', error.toString()))
  }
}

export default function* watchSubcategoriesLoad() {
  yield takeEvery(SUB_CATEGORIES.LOAD, handleSubcategoriesLoad)
}
