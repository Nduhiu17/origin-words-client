import { SET_REGISTER_REQUEST } from '../constants'

const setRegisterRequestReducer = (state = '', action) => {
  if (action.type === SET_REGISTER_REQUEST) {
    return {
      ...state,
      registerRequest: action.registerRequest,
    }
  }
  return state
}

export default setRegisterRequestReducer
