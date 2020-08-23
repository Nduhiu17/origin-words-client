import { SUB_CATEGORIES } from '../constants'

const loadSubcategories = () => ({
  type: SUB_CATEGORIES.LOAD,
})

const setSubcategories = subcategories => ({
  type: SUB_CATEGORIES.LOAD_SUCCESS,
  subcategories,
})

const setError = error => ({
  type: SUB_CATEGORIES.LOAD_FAIL,
  error,
})

export { loadSubcategories, setSubcategories, setError }
