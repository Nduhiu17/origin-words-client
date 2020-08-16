import React from 'react'
import Header from './Header'
import Footer from './Footer'
import NavMenu from './NavMenu'
import { Grid } from '@material-ui/core'

export default function Layout(props) {
  return (
    <div>
      <NavMenu />
      <Header />
      <Grid>
         {props.children}
       </Grid>
      <Footer />
    </div>
  )
}
