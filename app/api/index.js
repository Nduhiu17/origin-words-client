const URL = `http://localhost:8089/api/v1`

const fetchFiles = async () => {
  const response = await fetch(`${URL}/files/get-files`)
  const data = await response.json()
  if (response.status > 400) {
    throw new Error(data.error)
  }

  return data.files
}

const fetchCategories = async () => {
  const response = await fetch(`${URL}/categories/get-categories`)
  const data = await response.json()
  if (response.status > 400) {
    throw new Error(data.error)
  }

  return data.categories
}

export { fetchFiles, fetchCategories }
