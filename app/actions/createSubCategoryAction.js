import { CREATE_SUB_CATEGORY } from '../constants'

const createSubCategory = subcategory => ({
  type: CREATE_SUB_CATEGORY.CREATE_REQUEST,
  subcategory,
})

const setMessage = subcategoryMessage => ({
  type: CREATE_SUB_CATEGORY.CREATE_SUCCESS,
  subcategoryMessage,
})

const setError = error => ({
  type: CREATE_SUB_CATEGORY.CREATE_FAIL,
  error,
})

export { createSubCategory, setMessage, setError }
