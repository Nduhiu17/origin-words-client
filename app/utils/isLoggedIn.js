const isLoggedIn = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  if (user != null) {
    const token = user.accessToken
    return token.length > 10
  }
  return false
}

export default isLoggedIn
