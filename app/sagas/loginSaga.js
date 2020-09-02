import { takeEvery, put, call, select } from 'redux-saga/effects'

import { setSnackbar } from '../reducers/snackbarReducer'

import { USER_LOGIN } from '../constants'
import { loginUser } from '../api'
import { setError, setToken } from '../actions/loginActions'
import history from '../utils/history'

const getLoginRequest = state => state.loginRequest.loginRequest

function* handleUserLogin() {
  const loginData = yield select(getLoginRequest)
  try {
    const userTokenData = yield call(loginUser, loginData)
    yield put(setToken(userTokenData))
    localStorage.setItem('user', JSON.stringify(userTokenData))
    history.push('/')
  } catch (error) {
    // dispatch error
    yield put(setError(error.toString()))
    yield put(setSnackbar(true, 'error', error.toString()))
    history.push('/login')
  }
}

export default function* watchUserLogin() {
  yield takeEvery(USER_LOGIN.LOGIN_REQUEST, handleUserLogin)
}
