import { SET_SIZE } from '../constants'

const setSizeReducer = (state = 10, action) => {
  if (action.type === SET_SIZE) {
    return {
      ...state,
      size: action.size,
    }
  }
  return state
}

export default setSizeReducer
