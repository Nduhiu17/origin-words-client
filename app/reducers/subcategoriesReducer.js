import { SUB_CATEGORIES } from '../constants'

const subcategoriesReducer = (state = [], action) => {
  if (action.type === SUB_CATEGORIES.LOAD_SUCCESS) {
    return [...state, ...action.subcategories]
  }
  return state
}

export default subcategoriesReducer
