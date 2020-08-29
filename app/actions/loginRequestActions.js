import { SET_LOGIN_REQUEST } from '../constants'

const setLoginRequest = loginRequest => ({
  type: SET_LOGIN_REQUEST,
  loginRequest,
})

export { setLoginRequest }
