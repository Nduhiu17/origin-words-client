import { SELECT_A_SUB_CATEGORY } from '../constants'

const selectasubcategoryReducer = (state = 1, action) => {
  if (action.type === SELECT_A_SUB_CATEGORY) {
    return {
      ...state,
      selectedSubCat: action.selectedSubCat,
    }
  }
  return state
}

export default selectasubcategoryReducer
