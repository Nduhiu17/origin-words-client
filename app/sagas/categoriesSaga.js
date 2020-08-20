import { takeEvery, put, call } from 'redux-saga/effects'
import { CATEGORIES } from '../constants'
import { fetchCategories } from '../api'
import { setSnackbar } from '../reducers/snackbarReducer'
import { setCategories, setError } from '../actions/categoriesActions'

function* handleCategoriesLoad() {
  try {
    const categories = yield call(fetchCategories)
    yield put(setCategories(categories))
  } catch (error) {
    // dispatch error
    yield put(setError(error.toString()))
    yield put(setSnackbar(true, 'error', error.toString()))
  }
}

export default function* watchCategoriesLoad() {
  yield takeEvery(CATEGORIES.LOAD, handleCategoriesLoad)
}
