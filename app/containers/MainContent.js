import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Paper, Grid, Toolbar } from '@material-ui/core'

import FileList from './FileList'
import Layout from './Layout'
import PaginationComponent from '../shared/PaginationComponent'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  margin: {
    margin: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
    background: 'transparent',
    padding: 14,
    fontWeight: 600,
    color: '#ff8c00',
  },
}))

const MainContent = () => {
  const classes = useStyles()

  return (
    <Layout>
      <Container>
        <Paper
          style={{ marginTop: -50, padding: 20, height: 'auto' }}
          className="container"
          elevation={10}
        >
          <Toolbar />
          <div className={classes.root}>
            <Grid container spacing={1}>
              <Grid container item xs={12} spacing={3}>
                <PaginationComponent />
              </Grid>
            </Grid>
            <hr />
            <Toolbar />
            <FileList />
          </div>
        </Paper>
      </Container>
    </Layout>
  )
}

export default MainContent
