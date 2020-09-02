// add cart action
import {
  ADD_QUANTITY,
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  SUB_QUANTITY,
} from '../constants'

export const addToCart = (id, files) => ({
  type: ADD_TO_CART,
  id,
  files,
})

// remove item action
export const removeItem = id => ({
  type: REMOVE_CART_ITEM,
  id,
})
// subtract qt action
export const subtractQuantity = id => ({
  type: SUB_QUANTITY,
  id,
})
// add qt action
export const addQuantity = id => ({
  type: ADD_QUANTITY,
  id,
})
