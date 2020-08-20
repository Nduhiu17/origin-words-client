// Root saga
import { all } from 'redux-saga/effects'
import filesSaga from './filesSaga'
import categoriesSaga from './categoriesSaga'

export default function* rootSaga() {
  yield all([filesSaga(), categoriesSaga()])
}
