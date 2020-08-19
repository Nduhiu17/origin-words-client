import { FILES } from '../constants'

const errorReducer = (state = null, action) => {
  switch (action.type) {
    case FILES.LOAD_FAIL:
      return action.error
    case FILES.LOAD:
    case FILES.LOAD_SUCCESS:
      return null

    default:
      return state
  }
}

export default errorReducer
