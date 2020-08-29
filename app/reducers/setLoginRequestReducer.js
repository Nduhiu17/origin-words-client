import { SET_LOGIN_REQUEST } from '../constants'

const setLoginRequestReducer = (state = '', action) => {
  if (action.type === SET_LOGIN_REQUEST) {
    return {
      ...state,
      loginRequest: action.loginRequest,
    }
  }
  return state
}

export default setLoginRequestReducer
