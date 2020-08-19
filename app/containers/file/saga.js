import { takeEvery } from 'redux-saga/effects'
import { FILES } from '../../constants'

export function* handleFilesLoad() {
  console.log('====================================')
  console.log('we are here......................')
  console.log('====================================')
}

export default function* watchFilesLoad() {
  yield takeEvery(FILES.LOAD, handleFilesLoad)
}
