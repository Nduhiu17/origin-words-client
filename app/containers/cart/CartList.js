import React from 'react'
import { Grid } from '@material-ui/core'
import CartItem from './CartItem'

export default function CartList() {
  return (
    <Grid>
      <CartItem />
      <CartItem />
      <CartItem />
    </Grid>
  )
}
