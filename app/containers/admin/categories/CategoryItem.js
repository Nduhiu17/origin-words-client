import React, { useState } from 'react'
import { Typography, Grid } from '@material-ui/core'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'

import { makeStyles } from '@material-ui/core/styles'
import Zoom from '@material-ui/core/Zoom'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import GroupWorkIcon from '@material-ui/icons/GroupWork'
import Tooltip from '@material-ui/core/Tooltip'
import { CustomDialog } from '../../../shared/CustomModal'
import { CategoryForm } from './CategoryForm'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}))

export const CategoryItem = ({ title, headTitle, subtitle }) => {
  const classes = useStyles()
  const [isOpen, setIsOpen] = useState(false)

  const handleDialogClose = () => {
    // setIsEditing(true);
    setIsOpen(false)
  }

  const handleDialogOpen = () => {
    setIsOpen(true)
  }
  return (
    <Grid>
      <ListItem className={classes.ListItem}>
        <Grid
          item
          md={12}
          sm={12}
          xs={12}
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <Grid style={{ display: 'flex' }}>
            <ListItemAvatar>
              <Avatar>
                <GroupWorkIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={title} secondary={subtitle} />
          </Grid>
          <Grid>
            <Tooltip TransitionComponent={Zoom} title="Delete">
              <DeleteIcon style={{ marginRight: 12, color: 'red' }} />
            </Tooltip>
            <Tooltip TransitionComponent={Zoom} title="Edit">
              <EditIcon
                style={{ marginRight: 12, color: 'green' }}
                onClick={handleDialogOpen}
              />
            </Tooltip>
          </Grid>
        </Grid>
      </ListItem>
      <CustomDialog
        isOpen={isOpen}
        handleClose={handleDialogClose}
        title="Edit"
      >
        <CategoryForm />
      </CustomDialog>
    </Grid>
  )
}
