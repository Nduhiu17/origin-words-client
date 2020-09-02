import { takeEvery, put, call, select } from 'redux-saga/effects'

import { setSnackbar } from '../reducers/snackbarReducer'

import { FILE_UPLOAD } from '../constants'
import { uploadFile } from '../api'
// import { setError, setToken } from '../actions/fi'

// const getFileData = state => state.loginRequest.loginRequest

// function* handleUserLogin() {
//   const loginData = yield select(getLoginRequest)
//   try {
//     const userTokenData = yield call(loginUser, loginData)
//     yield put(setToken(userTokenData))
//     localStorage.setItem('user', JSON.stringify(userTokenData))
//   } catch (error) {
//     // dispatch error
//     yield put(setError(error.toString()))
//     yield put(setSnackbar(true, 'error', error.toString()))
//   }
// }
//
// export default function* watchUserLogin() {
//   yield takeEvery(USER_LOGIN.LOGIN_REQUEST, handleUserLogin)
// }
