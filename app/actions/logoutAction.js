import { USER_LOGIN } from '../constants'

const logoutUser = user => ({
  type: USER_LOGIN,
  user,
})

export { logoutUser }
