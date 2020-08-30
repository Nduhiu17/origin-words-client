import { CREATE_SUB_CATEGORY } from '../constants'

const setSubCategoryCreateRequest = subcategoryCreateRequest => ({
  type: CREATE_SUB_CATEGORY.CREATE_REQUEST,
  subcategoryCreateRequest,
})

export { setSubCategoryCreateRequest }
