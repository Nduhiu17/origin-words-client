import { CREATE_SUB_CATEGORY } from '../constants'

const setSubCategoryCreateReducer = (state = {}, action) => {
  if (action.type === CREATE_SUB_CATEGORY.CREATE_REQUEST) {
    return {
      ...state,
      subcategoryCreateRequest: action.subcategoryCreateRequest,
    }
  }
  return state
}

export default setSubCategoryCreateReducer
