import { SELECT_CATEGORY } from '../constants'

const selectCategory = id => ({
  type: SELECT_CATEGORY,
  id,
})

export { selectCategory }
