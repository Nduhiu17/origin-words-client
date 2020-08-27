import { SET_SEARCH_TERM } from '../constants'

const setSearchTerm = searchKeyword => ({
  type: SET_SEARCH_TERM,
  searchKeyword,
})

export { setSearchTerm }
