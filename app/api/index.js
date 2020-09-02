import getToken from '../utils/getToken'

const URL = `http://localhost:8089/api/v1`
const token = getToken()
const currentToken = `Bearer ${token}`

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

const registerUser = async registerData => {
  const response = await fetch(`${URL}/auth/register`, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(registerData), // body data type must match "Content-Type" header
  })
  const data = await response.json()
  if (response.status > 400) {
    throw new Error(data.error)
  }

  return data
}

const createCategory = async categoryData => {
  const response = await fetch(`${URL}/categories/create-category`, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      Authorization: currentToken,
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(categoryData), // body data type must match "Content-Type" header
  })
  const data = await response.json()
  if (response.status > 400) {
    throw new Error(data.error)
  }

  return data
}

const createSubCategory = async (subcategoryData, subcategoryid) => {
  const response = await fetch(
    `${URL}/subcategories/create-sub-category/${subcategoryid}`,
    {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        Authorization: currentToken,
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(subcategoryData), // body data type must match "Content-Type" header
    },
  )
  const data = await response.json()
  if (response.status > 400) {
    throw new Error(data.error)
  }

  return data
}

const uploadFile = async formData => {
  const dataTopost = new URLSearchParams()
  // eslint-disable-next-line no-restricted-syntax
  for (const pair of formData) {
    dataTopost.append(pair[0], pair[1])
  }

  const response = await fetch(`${URL}/files`, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      Authorization: currentToken,
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: dataTopost, // body data type must match "Content-Type" header
  })
  const data = await response.json()
  if (response.status > 400) {
    throw new Error(data.error)
  }

  return data
}

export {
  fetchFiles,
  fetchCategories,
  fetchSubcategories,
  loginUser,
  registerUser,
  createCategory,
  createSubCategory,
  uploadFile,
}
