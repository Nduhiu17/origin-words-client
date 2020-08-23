import { SELECT_CATEGORY } from '../constants'

const selectCategoryReducer = (state = [], action) => {
  if (action.type === SELECT_CATEGORY) {
    return {
      ...state,
      subcategories: action.subcategories,
    }
  }
  return state
}

export default selectCategoryReducer
