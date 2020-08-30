import { FILES, CATEGORIES, SUB_CATEGORIES } from '../constants'

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case FILES.LOAD:
      return true
    case FILES.LOAD_SUCCESS:
      return false
    case FILES.LOAD_FAIL:
      return false
    case CATEGORIES.LOAD:
      return true
    case CATEGORIES.LOAD_SUCCESS:
      return false
    case CATEGORIES.LOAD_FAIL:
      return false
    case SUB_CATEGORIES.LOAD:
      return true
    case SUB_CATEGORIES.LOAD_SUCCESS:
      return false
    case SUB_CATEGORIES.LOAD_FAIL:
      return false
    default:
      return state
  }
}

export default loadingReducer
