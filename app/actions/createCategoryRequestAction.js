import { CREATE_CATEGORY } from '../constants'

const setCategoryCreateRequest = categoryCreateRequest => ({
  type: CREATE_CATEGORY.CREATE_REQUEST,
  categoryCreateRequest,
})

export { setCategoryCreateRequest }
