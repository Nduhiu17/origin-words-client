import React from 'react'
import { useDispatch } from 'react-redux'
import { takeEvery, put, call } from 'redux-saga/effects'
import { FILES } from '../constants'
import { fetchFiles } from '../api'
import { setError, setFiles } from '../actions/filesActions'
import { setSnackbar } from "../reducers/snackbarReducer";


// const dispatch = useDispatch()
//   console.log('====================================');
//   console.log(dispatch);
//   console.log('====================================');

function* handleFilesLoad() {
// const dispatch = useDispatch()



  try {
    const files = yield call(fetchFiles)
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
