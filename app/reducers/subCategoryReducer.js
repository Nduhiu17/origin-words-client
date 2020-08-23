import { SELECT_SUB_CATEGORY } from '../constants'

const subcategoryReducer = (state = {}, action) => {
  if (action.type === SELECT_SUB_CATEGORY) {
    return {
      ...state,
      subcategoryId: action.id,
    }
  }
  return state
}

export default subcategoryReducer
