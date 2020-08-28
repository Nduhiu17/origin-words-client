import { USER_LOGIN } from '../constants'

const buttonLoadingReducer = (state = false, action) => {
  switch (action.type) {
    case USER_LOGIN.LOGIN_REQUEST:
      return true
    case USER_LOGIN.LOGIN_SUCCESS:
      return false
    case USER_LOGIN.LOGIN_FAIL:
      return false
    default:
      return state
  }
}

export default buttonLoadingReducer
