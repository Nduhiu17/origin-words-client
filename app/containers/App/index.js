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

import NotFoundPage from 'containers/NotFoundPage/Loadable'

import GlobalStyle from '../../global-styles'

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

export default function App() {
  return (
    <div>
      <Suspense fallback={<LinearProgress />}>
        <Switch>
          <Route exact path="/" component={mainContent} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/admin" component={AdminDashboard} />
          <Route exact path="/admin/files" component={AdminFileList} />
          <Route
            exact
            path="/admin/categories"
            component={CategoryAndSubCategoryContainer}
          />
          <Route exact path="/account/details" component={AccountDetails} />
          <Route exact path="/account/purchased" component={Purchased} />
          <Route exact path="/account/saved" component={Saved} />
          <Route component={NotFoundPage} />
        </Switch>
      </Suspense>
      <GlobalStyle />
    </div>
  )
}
