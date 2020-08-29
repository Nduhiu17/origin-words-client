import { SET_REGISTER_REQUEST } from '../constants'

const setRegisterRequest = registerRequest => ({
  type: SET_REGISTER_REQUEST,
  registerRequest,
})

export { setRegisterRequest }
