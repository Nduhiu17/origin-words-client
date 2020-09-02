import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CartItem from './CartItem'
import { addToCart } from '../../actions/cartActions'
import { setSnackbar } from '../../reducers/snackbarReducer'

const CartList = props => {
  const { cartItems } = props
  if (cartItems.length === 0) {
    return (
      <Grid container style={{ color: 'red', marginTop: 30 }}>
        <Grid md={4} />
        <Grid md={4}>
          <Typography>You have 0 items in your cart</Typography>
        </Grid>
        <Grid md={4} />
      </Grid>
    )
  }
  return (
    <Grid>{cartItems && cartItems.map(item => <CartItem item={item} />)}</Grid>
  )
}

CartList.propTypes = {
  cartItems: PropTypes.array,
}

const mapStateToProps = state => ({
  cartItems: state.cartReducer.addedItems,
})

const mapDispatchToProps = dispatch => ({
  addToCart: (id, files) => {
    dispatch(addToCart(id, files))
  },
  setSnackbar: () => {
    dispatch(setSnackbar(true, 'success', 'Added to cart'))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CartList)
