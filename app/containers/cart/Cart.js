import React from 'react'
import { Container, Grid, Typography, Paper, Toolbar } from '@material-ui/core'

import { createStyles, makeStyles } from '@material-ui/core/styles'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import CartList from './CartList'
import paypalImg from '../../assets/images/paypal.png'
import Layout from '../Layout'
import { addToCart } from '../../actions/cartActions'
import { setSnackbar } from '../../reducers/snackbarReducer'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: 20,
      marginTop: -45,
    },
    item: {
      padding: 20,
    },
    header: {
      color: 'gray',
    },
    subtotal: {
      padding: 10,
    },
    totalwrapper: {
      padding: 20,
    },
    yellow: {
      color: '#ff8c00',
      fontWeight: 'bold',
    },
  }),
)

const Cart = props => {
  const classes = useStyles()
  const { total, cartItems } = props
  const totalItems = cartItems.length
  return (
    <Layout>
      <Container>
        <Paper className={classes.root} elevation={10}>
          <Typography variant="h3">Cart</Typography>
          <Typography variant="h6">Your order({totalItems} items)</Typography>
          <Grid container justify="space-between" className={classes.header}>
            <Grid item md={6}>
              <Typography variant="h6">ITEM</Typography>
            </Grid>
            <Grid item md={2}>
              <Typography variant="h6">QUANTITY</Typography>
            </Grid>
            <Grid item md={2}>
              <Typography variant="h6">UNIT PRICE</Typography>
            </Grid>
            <Grid item md={2}>
              <Typography variant="h6">SUBTOTAL</Typography>
            </Grid>
          </Grid>
          <CartList />
          <Paper className={classes.totalwrapper} elevation={1}>
            <Grid container justify="flex-end">
              <Grid item md={8} style={{ color: 'blue' }}>
                Pay using paypal
                <img
                  alt="paypal"
                  src={paypalImg}
                  style={{ maxWidth: 60, maxHeight: 60 }}
                />
              </Grid>
              <Grid
                md={4}
                sm={12}
                xs={12}
                item
                style={{ display: 'flex', justifyContent: 'space-between' }}
              >
                <Paper className={classes.subtotal} elevation={1}>
                  <Typography variant="h6" className={classes.yellow}>
                    Subtotal
                  </Typography>
                </Paper>
                <Paper className={classes.subtotal} elevation={1}>
                  <Typography variant="h6" className={classes.yellow}>
                    <AttachMoneyIcon />
                    {total}
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
            <Toolbar />
            <Grid container justify="flex-end">
              <Grid item md={4} style={{ color: 'blue' }}>
                Pay using paypal
                <img
                  alt="paypal"
                  src={paypalImg}
                  style={{ maxWidth: 60, maxHeight: 60 }}
                />
              </Grid>
              <Grid
                md={4}
                xs={12}
                sm={12}
                item
                style={{ display: 'flex', justifyContent: 'space-between' }}
              >
                <Paper className={classes.subtotal} elevation={1}>
                  <Typography variant="h6" className={classes.yellow}>
                    Total
                  </Typography>
                </Paper>
                <Paper className={classes.subtotal} elevation={1}>
                  <Typography variant="h6" className={classes.yellow}>
                    <AttachMoneyIcon />
                    {total}
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
            <Toolbar />
            <Grid container justify="flex-end">
              <Grid
                md={6}
                sm={12}
                xs={12}
                item
                style={{ display: 'flex', justifyContent: 'space-between' }}
                className="cart-cards"
              >
                <Grid item sm={12} xs={12}>
                  <Paper className={classes.subtotal}>
                    <Typography variant="h6" className={classes.yellow}>
                      Continue Shopping
                    </Typography>
                  </Paper>
                </Grid>
                <Grid item sm={12} xs={12}>
                  <Paper className={classes.subtotal}>
                    <Typography variant="h6" className={classes.yellow}>
                      Proceed to checkout
                    </Typography>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Paper>
      </Container>
    </Layout>
  )
}

Cart.propTypes = {
  total: PropTypes.number,
  cartItems: PropTypes.number,
}

const mapStateToProps = state => ({
  cartItems: state.cartReducer.addedItems,
  total: state.cartReducer.total,
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
)(Cart)
