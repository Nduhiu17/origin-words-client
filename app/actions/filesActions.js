import { FILES } from '../constants'

const loadFiles = () => ({
  type: FILES.LOAD,
})

const setFiles = data => ({
  type: FILES.LOAD_SUCCESS,
  data,
})

const setError = error => ({
  type: FILES.LOAD_FAIL,
  error,
})

export { loadFiles, setFiles, setError }
