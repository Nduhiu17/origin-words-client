import { SELECT_A_SUB_CATEGORY } from '../constants'

const selectaSubCategory = selectedSubCat => ({
  type: SELECT_A_SUB_CATEGORY,
  selectedSubCat,
})

export { selectaSubCategory }
