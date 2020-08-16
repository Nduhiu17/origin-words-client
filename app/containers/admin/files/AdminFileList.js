import React, { useState } from 'react'
import { Grid, Button, Paper, Typography } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import AdminFile from './AdminFile'
import AdminLayout from '../AdminLayout'
import PaginationComponent from '../../../shared/PaginationComponent'

import { CustomDialog } from '../../../shared/CustomModal'
import { FileForm } from './FileForm'

const useStyles = makeStyles(() =>
  createStyles({
    create: {
      marginTop: 15,
      marginBottom: 20,
    },
  }),
)

const AdminFileList = () => {
  const classes = useStyles()
  const [isOpen, setIsOpen] = useState(false)

  const handleDialogClose = () => {
    setIsOpen(false)
  }

  const handleDialogOpen = () => {
    setIsOpen(true)
  }
  return (
    <AdminLayout>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={1}>
          <PaginationComponent />
        </Grid>
      </Grid>
      <Grid
        container
        justify="flex-end"
        className={classes.create}
      >
        <Paper elevation={4}>
          <Typography>
            <Button
              style={{
                backgroundColor: '#ff8c00',
                color: '#fff',
              }}
              onClick={handleDialogOpen}
            >
              <CloudUploadIcon style={{ marginRight: 12 }} />
              Upload File
            </Button>
          </Typography>
        </Paper>
      </Grid>

      <AdminFile />
      <AdminFile />
      <AdminFile />
      <AdminFile />
      <CustomDialog
        isOpen={isOpen}
        handleClose={handleDialogClose}
        title="Upload file"
      >
        <FileForm />
      </CustomDialog>
    </AdminLayout>
  )
}

export default AdminFileList
