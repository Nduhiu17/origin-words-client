import { SELECT_CATEGORY } from '../constants'

const selectSubCategories = subcategories => ({
  type: SELECT_CATEGORY,
  subcategories,
})

export { selectSubCategories }
