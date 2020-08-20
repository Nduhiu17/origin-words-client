import React from 'react'
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}))

export const AppLoader = ({ open }) => {
  const classes = useStyles()

  // const handleClose = () => {
  //     setOpen(false);
  // };
  const handleToggle = () => {
    setOpen(!open)
  }
  return (
    <Backdrop className={classes.backdrop} open={open} onClick={handleToggle}>
      <CircularProgress color="inherit" size={40} thickness={6}/>
    </Backdrop>
  )
}
