import { takeEvery, put, call, select } from 'redux-saga/effects'

import { setSnackbar } from '../reducers/snackbarReducer'

import { USER_REGISTER } from '../constants'
import { registerUser } from '../api'
import { setError, setToken } from '../actions/registerActions'
import history from '../utils/history'

const getRegisterRequest = state => state.registerRequest.registerRequest

function* handleUserRegister() {
  const registrationData = yield select(getRegisterRequest)
  try {
    const userTokenData = yield call(registerUser, registrationData)
    yield put(setToken(userTokenData))
    // localStorage.setItem('user', JSON.stringify(userTokenData))
  } catch (error) {
    // dispatch error
    yield put(setError(error.toString()))
    history.push('/register')
    yield put(setSnackbar(true, 'error', error.toString()))
  }
}

export default function* watchUserRegister() {
  yield takeEvery(USER_REGISTER.REGISTER_REQUEST, handleUserRegister)
}
