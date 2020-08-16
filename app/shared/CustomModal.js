import React from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core'
import propTypes from 'prop-types'
import Fade from '@material-ui/core/Fade'
import Tooltip from '@material-ui/core/Tooltip'
import Zoom from '@material-ui/core/Zoom'

export const CustomDialog = ({
  isOpen,
  handleClose,
  title,
  subtitle,
  children,
}) => (
  <Dialog
    fullWidth
    maxWidth="md"
    open={isOpen}
    onClose={handleClose}
    arial-labelledby="max-width-title"
    disableBackdropClick
    TransitionComponent={Fade}
    transitionDuration={220}
  >
    <DialogTitle
      id="max-width-dialog-title"
      style={{
        textTransform: 'uppercase',
        fontWeight: 'bolder',
        color: '#ff8c00',
      }}
    >
      {title}
    </DialogTitle>
    <DialogContent>
      <DialogContentText>{subtitle}</DialogContentText>
      {children}
    </DialogContent>
    <DialogActions>
      <Tooltip TransitionComponent={Zoom} title="Close">
        <Button
          onClick={handleClose}
          style={{ color: '#fff', backgroundColor: '#ff8c00' }}
        >
          Close
        </Button>
      </Tooltip>
    </DialogActions>
  </Dialog>
)

CustomDialog.propTypes = {
  isOpen: propTypes.bool.isRequired,
  handleClose: propTypes.func.isRequired,
  title: propTypes.string.isRequired,
  subtitle: propTypes.string,
  children: propTypes.element.isRequired,
}
