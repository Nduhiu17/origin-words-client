import { CHANGE_PAGE } from '../constants'

const changePage = page => ({
  type: CHANGE_PAGE,
  page,
})

export { changePage }
