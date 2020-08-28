const URL = `http://localhost:8089/api/v1`

const fetchFiles = async (page, size, subcategoryid, searchKeyword) => {
  const response = await fetch(
    `${URL}/files/get-files?page=${page}&size=${size}&subcategoryid=${subcategoryid}&searchKeyword=${searchKeyword}`,
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

const loginUser = async loginData => {
  const response = await fetch(`${URL}/auth/login`, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(loginData), // body data type must match "Content-Type" header
  })
  const data = await response.json()
  if (response.status > 400) {
    throw new Error(data.error)
  }

  return data
}

export { fetchFiles, fetchCategories, fetchSubcategories, loginUser }
