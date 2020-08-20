import { CATEGORIES } from '../constants'

const categoriesReducer = (state = [], action) => {
  if (action.type === CATEGORIES.LOAD_SUCCESS) {
    return [...state, ...action.categories]
  }
  return state
}

export default categoriesReducer
