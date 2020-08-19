import { FILES } from '../constants'

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case FILES.LOAD:
      return true
    case FILES.LOAD_SUCCESS:
      return false
    case FILES.LOAD_FAIL:
      return false
    default:
      return state
  }
}

export default loadingReducer
