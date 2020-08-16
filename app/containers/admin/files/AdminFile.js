import React, { useState } from 'react'
import {
  Paper,
  Typography,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Link,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Tooltip from '@material-ui/core/Tooltip'
import Zoom from '@material-ui/core/Zoom'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import { CustomDialog } from '../../../shared/CustomModal'
import { FileForm } from './FileForm'

const useStyles = makeStyles(theme => ({
  Paper: {
    padding: 20,
    marginBottom: 20,
  },
  buttons: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
}))

const AdminFile = () => {
  const classes = useStyles()
  const [isOpen, setIsOpen] = useState(false)

  const handleDialogClose = () => {
    setIsOpen(false)
  }

  const handleDialogOpen = () => {
    setIsOpen(true)
  }

  return (
    <Grid>
      <Paper className={classes.Paper}>
        <Grid container>
          <Grid item md={10} sm={12} xs={12}>
            <Typography md={12}>
              Easily generate Lorem Ipsum placeholder text in any number of
              characters, words sentences or paragraphs. Learn about the origins
              of the passage and its.Learn about the origins of the passage and
              its.
            </Typography>
              <div className="">
                <Accordion
                  square
                  style={{ border: 'none !important', boxShadow: 'none' }}
                >
                  <AccordionSummary expandIcon="" id="panel1a-header">
                    <Link className="" style={{ color: '#617482' }}>
                      View Details
                    </Link>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse malesuada lacus ex, sit amet blandit leo
                      lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
          </Grid>
          <Grid
            item
            md={2}
            sm={12}
            xs={12}
            className={classes.buttons}
            id="edit-buttons"
          >
            <Tooltip TransitionComponent={Zoom} title="Delete file">
              <Button variant="contained" color="secondary" size="small">
                <DeleteIcon style={{ marginRight: 12 }} />
                Delete
              </Button>
            </Tooltip>
            <Tooltip TransitionComponent={Zoom} title="Edit file content">
              <Button
                variant="contained"
                size="small"
                onClick={handleDialogOpen}
              >
                <EditIcon style={{ marginRight: 12 }} />
                Edit
              </Button>
            </Tooltip>
          </Grid>
        </Grid>
      </Paper>
      <CustomDialog
        isOpen={isOpen}
        handleClose={handleDialogClose}
        title="Edit file"
      >
        <FileForm />
      </CustomDialog>
    </Grid>
  )
}

export default AdminFile
