import { CREATE_CATEGORY } from '../constants'

const createCategory = category => ({
  type: CREATE_CATEGORY.CREATE_REQUEST,
  category,
})

const setMessage = categoryMessage => ({
  type: CREATE_CATEGORY.CREATE_SUCCESS,
  categoryMessage,
})

const setError = error => ({
  type: CREATE_CATEGORY.CREATE_FAIL,
  error,
})

export { createCategory, setMessage, setError }
