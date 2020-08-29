import { USER_REGISTER } from '../constants'

const registerUser = registerRequest => ({
  type: USER_REGISTER.REGISTER_REQUEST,
  registerRequest,
})

const setToken = userTokenData => ({
  type: USER_REGISTER.REGISTER_SUCCESS,
  userTokenData,
})

const setError = error => ({
  type: USER_REGISTER.REGISTER_FAIL,
  error,
})

export { registerUser, setToken, setError }
