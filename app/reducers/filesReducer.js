import { FILES } from '../constants'

const filesReducer = (state = [], action) => {
  if (action.type === FILES.LOAD_SUCCESS) {
    return [...state, ...action.files];
  }
  return state;
};

export default filesReducer;
