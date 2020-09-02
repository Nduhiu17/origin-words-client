import React from 'react'
import { Grid } from '@material-ui/core'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CartItem from './CartItem'
import { addToCart } from '../../actions/cartActions'
import { setSnackbar } from '../../reducers/snackbarReducer'

const CartList = props => {
  const { cartItems } = props
  return (
    <Grid>{cartItems && cartItems.map(item => <CartItem item={item} />)}</Grid>
  )
}

CartList.propTypes = {}

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
