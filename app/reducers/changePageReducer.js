import { CHANGE_PAGE } from '../constants'

const changePageReducer = (state = 0, action) => {
  if (action.type === CHANGE_PAGE) {
    return {
      ...state,
      page: action.page,
    }
  }
  return state
}

export default changePageReducer
