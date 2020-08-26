import { takeEvery, put, call } from 'redux-saga/effects'
import { select } from '@redux-saga/core/effects'
import { FILES } from '../constants'
import { fetchFiles } from '../api'
import { setError, setFiles } from '../actions/filesActions'
import { setSnackbar } from '../reducers/snackbarReducer'

const getSize = state => state.size.size

function* handleFilesLoad() {
  try {
    const size = yield select(getSize)
    const files = yield call(fetchFiles, 0, size || 10)
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
