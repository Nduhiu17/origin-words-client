import React from 'react'
import { Grid, Paper, CardHeader, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import AccountLayout from './AccountLayout'

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 275,
  },
  column: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  paper: {
    // padding: 0,
  },
}))

const AccountDetails = () => {
  const classes = useStyles()
  return (
    <AccountLayout>
      <Grid container spacing={0}>
        <Grid container>
          <Grid item md={6} xs={12} sm={12}>
            <CardHeader
              title="Account Overview
            "
            />
          </Grid>
        </Grid>
        <Grid container justify="space-between">
          <Grid item md={6} xs={12} sm={12}>
            <Paper className={classes.paper} elevation={4}>
              <Card className={classes.root} variant="outlined">
                <CardContent>
                  <Grid>Account Details</Grid>
                  <Divider variant="fullWidth" />
                  <Grid className={classes.column}>
                    <Typography>Name</Typography>
                    <Typography>Antony Nduhiu</Typography>
                  </Grid>
                  <Grid className={classes.column}>
                    <Typography>Email</Typography>
                    <Typography>nduhiu254@gmail.com</Typography>
                  </Grid>
                  <Grid className={classes.column}>
                    <Typography>Username</Typography>
                    <Typography>nduhiu254</Typography>
                  </Grid>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    style={{ backgroundColor: '#ff8c00', color: '#fff' }}
                  >
                    Change Password
                  </Button>
                </CardActions>
              </Card>
            </Paper>
          </Grid>
          <Grid item md={5} xs={12} sm={12}>
            <Paper className={classes.paper} elevation={4}>
              <Card className={classes.root} variant="outlined">
                <CardContent>
                  <Typography>Personal statisics</Typography>
                  <Divider variant="fullWidth" />
                  <Grid className={classes.column}>
                    <Typography>Total Purchased Items</Typography>
                    <Typography>30</Typography>
                  </Grid>
                  <Grid className={classes.column}>
                    <Typography>Total saved items</Typography>
                    <Typography>15</Typography>
                  </Grid>
                  <Grid className={classes.column}>
                    <Typography>Failed Transactions</Typography>
                    <Typography>5</Typography>
                  </Grid>
                </CardContent>
              </Card>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </AccountLayout>
  )
}

export default AccountDetails
