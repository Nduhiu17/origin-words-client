import { SET_SIZE } from '../constants'

const setSizeReducer = (state = 4, action) => {
  if (action.type === SET_SIZE) {
    return {
      ...state,
      size: action.size,
    }
  }
  return state
}

export default setSizeReducer
