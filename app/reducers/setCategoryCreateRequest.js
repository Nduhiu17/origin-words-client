import { CREATE_CATEGORY } from '../constants'

const setCategoryCreateRequestReducer = (state = '', action) => {
  if (action.type === CREATE_CATEGORY.CREATE_REQUEST) {
    return {
      ...state,
      categoryCreateRequest: action.categoryCreateRequest,
    }
  }
  return state
}

export default setCategoryCreateRequestReducer
