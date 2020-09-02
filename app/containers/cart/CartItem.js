import React from 'react'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Button } from '@material-ui/core'
import Tooltip from '@material-ui/core/Tooltip'
import Zoom from '@material-ui/core/Zoom'
import wordImg from '../../assets/images/download.png'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: 20,
    },
    item: {
      padding: 20,
      marginBottom: 20,
    },
    header: {
      color: 'gray',
    },
  }),
)
export default function CartItem({ item }) {
  const classes = useStyles()
  return (
    <Paper className={classes.item} elevation={0}>
      <Grid container justify="space-between">
        <Grid item md={6}>
          <Grid container spacing={2}>
            <Grid item md={2}>
              <Paper>
                <img
                  src={wordImg}
                  alt=""
                  style={{ width: '100%' }}
                  className="file-image"
                />
              </Paper>
            </Grid>
            <Grid>{item.name}</Grid>
          </Grid>
        </Grid>
        <Grid item md={2}>
          {item.quantity}
        </Grid>
        <Grid item md={2} style={{ color: '#ff8c00' }}>
          <AttachMoneyIcon />
          {item.price}
        </Grid>
        <Grid item md={2} style={{ color: '#ff8c00' }}>
          <AttachMoneyIcon />
          {item.price * item.quantity}
        </Grid>
      </Grid>
      <Grid container spacing={2} justify="flex-end">
        <Grid item md={2} xs={12} sm={12}>
          <Tooltip TransitionComponent={Zoom} title="Move to saved items">
            <Paper style={{ padding: 10 }} elevation={1}>
              <FavoriteBorderIcon color="secondary" />
              <Button>save items</Button>
            </Paper>
          </Tooltip>
        </Grid>
        <Grid style={{ marginTop: 0 }} item md={2} xs={12} sm={12}>
          <Tooltip TransitionComponent={Zoom} title="Remove item">
            <Paper style={{ padding: 10 }} elevation={1}>
              <RemoveShoppingCartIcon color="secondary" />
              <Button>Remove</Button>
            </Paper>
          </Tooltip>
        </Grid>
      </Grid>
    </Paper>
  )
}
