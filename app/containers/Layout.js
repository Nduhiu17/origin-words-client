import React from 'react'
import { Grid } from '@material-ui/core'
import Header from './Header'
import Footer from './Footer'
import NavMenu from './NavMenu'

export default function Layout(props) {
  return (
    <div>
      <NavMenu />
      <Header />
      <Grid>{props.children}</Grid>
      <Footer />
    </div>
  )
}
