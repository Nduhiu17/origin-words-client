import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import isLoggedIn from './isLoggedIn'

export const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      if (isLoggedIn()) {
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
