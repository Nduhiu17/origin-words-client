const isAdmin = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  if (!user) {
    return false
  }
  if (!user.roles[0]) {
    return false
  }
  if (!user.roles[0].roleList) {
    return false
  }
  if (!user.roles[0].roleList[0]) {
    return false
  }
  if (!user.roles[0].roleList[0].name) {
    return false
  }
  return user.roles[0].roleList[0].name === 'ADMIN'
}

export default isAdmin
