import { createSelector } from 'reselect'

const selectRouter = state => state.router

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  )

const selectSubcategories = state => state.subcategories

const makeSelectSubcategoriesById = () =>
  createSelector(
    selectSubcategories,
    subcategoriesState => subcategoriesState.subcategories,
  )

export { makeSelectLocation, makeSelectSubcategoriesById }
