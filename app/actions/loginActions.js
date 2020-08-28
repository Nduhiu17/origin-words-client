import { USER_LOGIN } from '../constants'

const loginUser = user => ({
  type: USER_LOGIN.LOGIN_REQUEST,
  user,
})

const setToken = userTokenData => ({
  type: USER_LOGIN.LOGIN_SUCCESS,
  userTokenData,
})

const setError = error => ({
  type: USER_LOGIN.LOGIN_FAIL,
  error,
})

export { loginUser, setToken, setError }
