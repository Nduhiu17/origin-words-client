import { LOGOUT } from '../constants'

const logoutReducer = (state = {}, action) => {
  if (action.type === LOGOUT) {
    return {
      ...state,
      ...action.user,
    }
  }
  return state
}

export default logoutReducer
