import { takeEvery, put, call, select } from 'redux-saga/effects'

import { FILES } from '../constants'
import { fetchFiles } from '../api'
import { setError, setFiles } from '../actions/filesActions'
import { setSnackbar } from '../reducers/snackbarReducer'

const getSize = state => state.size.size
const getPage = state => state.page
const getSubcategory = state => state.selectedSubcategory

function* handleFilesLoad() {
  try {
    const size = yield select(getSize)
    const page = yield select(getPage)
    const subcategory = yield select(getSubcategory)

    const subcategoryid = subcategory.subcategoryId

    const files = yield call(
      fetchFiles,
      page.page || 0,
      size || 10,
      subcategoryid || '',
    )
    yield put(setFiles(files))
  } catch (error) {
    // dispatch error
    yield put(setError(error.toString()))
    yield put(setSnackbar(true, 'error', error.toString()))
  }
}

export default function* watchFilesLoad() {
  yield takeEvery(FILES.LOAD, handleFilesLoad)
}
