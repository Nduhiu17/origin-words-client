// Root saga
import { all } from 'redux-saga/effects'
import filesSaga from './filesSaga'
import categoriesSaga from './categoriesSaga'
import subcategoriesSaga from './subcategoriesSaga'
import loginSaga from './loginSaga'
import registerSaga from './registerSaga'

export default function* rootSaga() {
  yield all([
    filesSaga(),
    categoriesSaga(),
    subcategoriesSaga(),
    loginSaga(),
    registerSaga(),
  ])
}
