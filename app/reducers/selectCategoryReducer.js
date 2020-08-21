import { SELECT_CATEGORY } from '../constants'

const selectCategoryReducer = (state = {}, action) => {
  if (action.type === SELECT_CATEGORY) {
    return {
      ...state,
      id: action.id,
    }
  }
  return state
}

export default selectCategoryReducer
