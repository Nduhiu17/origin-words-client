import React from 'react';
import { Container, Grid, Typography, Paper, Toolbar } from '@material-ui/core';

import { createStyles, makeStyles } from '@material-ui/core/styles';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import CartList from './CartList';
import paypalImg from '../../assets/images/paypal.png';
import Layout from '../Layout';

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
);

const Cart = () => {
  const classes = useStyles();
  return (
    <Layout>
      <Container>
        <Paper className={classes.root} elevation={10}>
          <Typography variant="h3">Cart</Typography>
          <Typography variant="h6">Your order(2 items)</Typography>
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
          <Paper className={classes.totalwrapper} elevation={8}>
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
                spacing={2}
              >
                <Paper className={classes.subtotal} elevation={4}>
                  <Typography variant="h6" className={classes.yellow}>
                    Subtotal
                  </Typography>
                </Paper>
                <Paper className={classes.subtotal} elevation={4}>
                  <Typography variant="h6" className={classes.yellow}>
                    <AttachMoneyIcon />
                    500.00
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
                spacing={2}
              >
                <Paper className={classes.subtotal} elevation={4}>
                  <Typography variant="h6" className={classes.yellow}>
                    Total
                  </Typography>
                </Paper>
                <Paper className={classes.subtotal} elevation={4}>
                  <Typography variant="h6" className={classes.yellow}>
                    <AttachMoneyIcon />
                    500.00
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
            <Toolbar />
            <Grid container justify="flex-end">
              <Grid
                md={6}
                sm={12}
                item
                style={{ display: 'flex', justifyContent: 'space-between' }}
                spacing={2}
                className="cart-cards"
              >
                <Paper className={classes.subtotal}>
                  <Typography variant="h6" className={classes.yellow}>
                    Continue Shopping
                  </Typography>
                </Paper>
                <Paper className={classes.subtotal}>
                  <Typography variant="h6" className={classes.yellow}>
                    Proceed to checkout
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Paper>
      </Container>
    </Layout>
  );
};

export default Cart;
