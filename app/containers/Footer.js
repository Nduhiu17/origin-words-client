import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Paper } from '@material-ui/core'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },

    title: {
      flexGrow: 1,
    },
    footer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      position: 'fixed',
      bottom: 0,
      left: 0,
      backgroundColor: '#fff',
      color: 'inherit',
    },
  }),
)

export default function Footer() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Toolbar />
      <Toolbar />
      <Paper>
        <AppBar position="static" className={classes.footer}>
          <Toolbar>
            <Typography component="span" style={{ fontSize: '12px' }}>
              &copy; OriginWords 2020
            </Typography>
          </Toolbar>
        </AppBar>
      </Paper>
    </div>
  )
}
