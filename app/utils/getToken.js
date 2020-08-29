const getToken = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  if (user != null) {
    const token = user.accessToken
    return token
  }
  return false
}

export default getToken
