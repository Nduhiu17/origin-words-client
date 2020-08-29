import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import isAdmin from './isAdmin'

export const AdminRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (isAdmin()) {
        return <Component {...props} />
      }
      return (
        <Redirect
          to={{
            pathname: '/login',
            state: {
              from: props.location,
            },
          }}
        />
      )
    }}
  />
)
