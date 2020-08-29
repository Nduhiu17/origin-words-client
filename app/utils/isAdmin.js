const isAdmin = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  if (user != null) {
    return user.roles[0].roleList[0].name === 'ADMIN'
  }
  return false
}

export default isAdmin
