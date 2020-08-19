import { FILES } from '../constants'

const loadFiles = () => ({
  type: FILES.LOAD,
})

const setFiles = files => ({
  type: FILES.LOAD_SUCCESS,
  files,
})

const setError = error => ({
  type: FILES.LOAD_FAIL,
  error,
})

export { loadFiles, setFiles, setError }
