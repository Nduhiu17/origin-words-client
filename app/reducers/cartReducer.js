import { createSelector } from 'reselect'
import {
  ADD_QUANTITY,
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  SUB_QUANTITY,
} from '../constants'

const initState = {
  addedItems: [],
  total: 0,
}
const cartReducer = (state = initState, action) => {
  // adding file to cart

  if (action.type === ADD_TO_CART) {
    console.log(`at the reducer we say>>>>>>>>>>>>>${action.files}`)
    const addedItem = action.files.find(item => item.id === action.id)
    // check if the action id exists in the addedItems
    const existedItem = state.addedItems.find(item => action.id === item.id)
    if (existedItem) {
      addedItem.quantity += 1
      return {
        ...state,
        total: state.total + addedItem.price,
      }
    }
    addedItem.quantity = 1
    // calculating the total
    const newTotal = state.total + addedItem.price

    return {
      ...state,
      addedItems: [...state.addedItems, addedItem],
      total: newTotal,
    }
  }

  if (action.type === REMOVE_CART_ITEM) {
    const itemToRemove = state.addedItems.find(item => action.id === item.id)
    const new_items = state.addedItems.filter(item => action.id !== item.id)

    // calculating the total
    const newTotal = state.total - itemToRemove.price * itemToRemove.quantity
    return {
      ...state,
      addedItems: new_items,
      total: newTotal,
    }
  }
  // INSIDE CART COMPONENT
  if (action.type === ADD_QUANTITY) {
    const addedItem = state.items.find(item => item.id === action.id)
    addedItem.quantity += 1
    const newTotal = state.total + addedItem.price
    return {
      ...state,
      total: newTotal,
    }
  }
  if (action.type === SUB_QUANTITY) {
    const addedItem = state.items.find(item => item.id === action.id)
    // if the qt == 0 then it should be removed
    if (addedItem.quantity === 1) {
      const new_items = state.addedItems.filter(item => item.id !== action.id)
      const newTotal = state.total - addedItem.price
      return {
        ...state,
        addedItems: new_items,
        total: newTotal,
      }
    }
    addedItem.quantity -= 1
    const newTotal = state.total - addedItem.price
    return {
      ...state,
      total: newTotal,
    }
  }
  return state
}

export default cartReducer
