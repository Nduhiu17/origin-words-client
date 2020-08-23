import { SELECT_SUB_CATEGORY } from '../constants'

const selectSubCategory = id => ({
  type: SELECT_SUB_CATEGORY,
  id,
})

export { selectSubCategory }
