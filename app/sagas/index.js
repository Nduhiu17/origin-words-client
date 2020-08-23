// Root saga
import { all } from 'redux-saga/effects'
import filesSaga from './filesSaga'
import categoriesSaga from './categoriesSaga'
import subcategoriesSaga from './subcategoriesSaga'

export default function* rootSaga() {
  yield all([filesSaga(), categoriesSaga(), subcategoriesSaga()])
}
