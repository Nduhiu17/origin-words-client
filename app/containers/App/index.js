/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'
import LinearProgress from '@material-ui/core/LinearProgress'
import '../../assets/css/sass/index.css'
import { connect } from 'react-redux'
import NotFoundPage from 'containers/NotFoundPage/Loadable'
// import Snackbar from '../../shared/Snackbar'

import { ConnectedRouter } from 'connected-react-router'
import { AppLoader } from '../../shared/AppLoader'

import GlobalStyle from '../../global-styles'
import CustomizedSnackbars from '../../shared/Snackbar'
import { ProtectedRoute } from '../../utils/ProtectedRoute'
import { AdminRoute } from '../../utils/AdminRoute'

const mainContent = React.lazy(() => import('../MainContent'))
const Login = React.lazy(() => import('../auth/login/Login'))
const Register = React.lazy(() => import('../auth/register/Register'))
const Cart = React.lazy(() => import('../cart/Cart'))
const AdminDashboard = React.lazy(() =>
  import('../admin/dashboard/AdminDashboard'),
)
const AdminFileList = React.lazy(() => import('../admin/files/AdminFileList'))
const CategoryAndSubCategoryContainer = React.lazy(() =>
  import('../admin/categories/CategoryAndSubCategoryContainer'),
)
const AccountDetails = React.lazy(() => import('../myaccount/AccountDetails'))
const Purchased = React.lazy(() => import('../myaccount/Purchased'))
const Saved = React.lazy(() => import('../myaccount/Saved'))

const App = ({ isLoading }) => (
  <div>
    <Suspense fallback={<LinearProgress />}>
      <Switch>
        <Route exact path="/" component={mainContent} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <ProtectedRoute exact path="/cart" component={Cart} />
        <AdminRoute exact path="/admin" component={AdminDashboard} />
        <AdminRoute exact path="/admin/files" component={AdminFileList} />
        <AdminRoute
          exact
          path="/admin/categories"
          component={CategoryAndSubCategoryContainer}
        />
        <ProtectedRoute
          exact
          path="/account/details"
          component={AccountDetails}
        />
        <ProtectedRoute exact path="/account/purchased" component={Purchased} />
        <ProtectedRoute exact path="/account/saved" component={Saved} />
        <Route component={NotFoundPage} />
      </Switch>
      <AppLoader open={isLoading} />
      <CustomizedSnackbars />
    </Suspense>
    <GlobalStyle />
  </div>
)

const mapStateToProps = ({ isLoading, error }) => ({
  isLoading,
  error,
})

export default connect(
  mapStateToProps,
  null,
)(App)
