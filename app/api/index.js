const URL = `http://localhost:8089/api/v1`

const fetchFiles = async (page, size) => {
  const response = await fetch(
    `${URL}/files/get-files?page=${page}&size=${size}`,
  )
  const data = await response.json()
  if (response.status > 400) {
    throw new Error(data.error)
  }

  return data
}

const fetchCategories = async () => {
  const response = await fetch(`${URL}/categories/get-categories`)
  const data = await response.json()
  if (response.status > 400) {
    throw new Error(data.error)
  }

  return data.categories
}

const fetchSubcategories = async () => {
  const response = await fetch(`${URL}/subcategories/get-sub-categories`)
  const data = await response.json()
  if (response.status > 400) {
    throw new Error(data.error)
  }

  return data.subcategories
}

export { fetchFiles, fetchCategories, fetchSubcategories }
