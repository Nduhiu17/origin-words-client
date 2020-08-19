/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import history from 'utils/history'
import filesReducer from './filesReducer'
import loadingReducer from './loadingReducer'
import errorReducer from './errorReducer'

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default function createReducer(injectedReducers = {}) {
  const rootReducer = combineReducers({
    router: connectRouter(history),
    files: filesReducer,
    isLoading: loadingReducer,
    error: errorReducer,
    ...injectedReducers,
  })

  return rootReducer
}