import React from 'react'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: 10,
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

export const FileSearch = () => {
  const classes = useStyles()
  return (
    <Paper className={classes.paper} elevation={1}>
      <FormControl className={classes.margin} fullWidth>
        <TextField
          id="filled-search"
          label="Search keyword"
          type="search"
          variant="filled"
        />
      </FormControl>
    </Paper>
  )
}
