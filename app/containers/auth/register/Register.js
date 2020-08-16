import React from 'react'
import {
  Paper,
  Grid,
  Typography,
  Container,
  Toolbar,
  Button,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import RegisterForm from './RegisterForm'
import Layout from '../../Layout'

const useStyles = makeStyles(theme => ({
  mainwrapper: {
    marginTop: -40,
    padding: 20,
  },

  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
  },
  title: {
    color: '#F95700FF',
    fontWeight: 'bold',
  },
}))

const Register = () => {
  const classes = useStyles()
  return (
    <Layout>
      <Container className={classes.mainwrapper} elevation={8}>
        <Paper elevation={8}>
          <Toolbar />
          <Grid container spacing={2}>
            <Grid item md={6} className={classes.wrapper} sm={12} xs={12}>
              <Paper elevation={8}>
                <Typography variant="h6" className={classes.title}>
                  REGISTER
                </Typography>
                <RegisterForm />
              </Paper>
            </Grid>
            <Grid item md={6} className={classes.wrapper} sm={12} xs={12}>
              <Paper elevation={8}>
                <Typography variant="h6" className={classes.title}>
                  Sign in into your Academic hub account
                </Typography>
                <Grid item md={12} sm={12} xs={12}>
                  <Toolbar />
                  <Typography variant="subtitle1">
                    Sign in into your Academic Hub user customer account in just
                    a few clicks! You can sign in either using your e-mail
                    address or through your Facebook account.
                  </Typography>
                </Grid>
                <Grid item md={12} sm={12} xs={12}>
                  <Toolbar />
                  <Button
                    variant="contained"
                    className={classes.button}
                    fullWidth
                    style={{
                      backgroundColor: '#40588A',
                      color: '#fff',
                      width: '80%',
                    }}
                  >
                    LOGIN WITH FACEBOOK
                  </Button>
                </Grid>
                <Grid item md={12} sm={12} xs={12}>
                  <Toolbar />
                  <Button
                    variant="contained"
                    className={classes.button}
                    style={{
                      backgroundColor: '#F95700FF',
                      color: '#fff',
                      width: '80%',
                    }}
                  >
                    LOGIN WITH EMAIL
                  </Button>
                </Grid>

                <Grid item md={12} sm={12} xs={12}>
                  <Toolbar />
                  <Button
                    variant="contained"
                    className={classes.button}
                    style={{
                      backgroundColor: '#1da1f2',
                      color: '#fff',
                      width: '80%',
                    }}
                  >
                    LOGIN WITH TWITTER
                  </Button>
                </Grid>
                <Grid item md={12} sm={12} xs={12}>
                  <Toolbar />
                  <Button
                    variant="contained"
                    className={classes.button}
                    style={{
                      backgroundColor: '#4285f4',
                      color: '#fff',
                      width: '80%',
                    }}
                  >
                    LOGIN WITH GOOGLE
                  </Button>
                </Grid>
                <Toolbar />
              </Paper>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Layout>
  )
}

export default Register
