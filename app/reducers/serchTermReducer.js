import { SET_SEARCH_TERM } from '../constants'

const setSearchTermReducer = (state = '', action) => {
  if (action.type === SET_SEARCH_TERM) {
    return {
      ...state,
      searchKeyword: action.searchKeyword,
    }
  }
  return state
}

export default setSearchTermReducer
