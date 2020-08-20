import { CATEGORIES } from '../constants'

const loadCategories = () => ({
  type: CATEGORIES.LOAD,
})

const setCategories = categories => ({
  type: CATEGORIES.LOAD_SUCCESS,
  categories,
})

const setError = error => ({
  type: CATEGORIES.LOAD_FAIL,
  error,
})

export { loadCategories, setCategories, setError }
