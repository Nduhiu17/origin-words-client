import { takeEvery, put, call } from 'redux-saga/effects'
import { FILES } from '../constants'
import { fetchFiles } from '../api'
import { setError, setFiles } from '../actions'

export function* handleFilesLoad() {
  try {
    const files = yield call(fetchFiles)
    yield put(setFiles(files))
  } catch (error) {
    // dispatch error
    yield put(setError(error.toString()))
  }
}

export default function* watchFilesLoad() {
  yield takeEvery(FILES.LOAD, handleFilesLoad)
}
