const URL = `http://localhost:8089/api/v1/files/get-files`

const fetchFiles = async () => {
  const response = await fetch(`${URL}`)
  const data = await response.json()
  if (response.status > 400) {
    throw new Error(data.error)
  }

  return data.files
}

export { fetchFiles }
