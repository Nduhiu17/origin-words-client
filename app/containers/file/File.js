import React, { useState } from 'react'
import { Paper, Grid, Typography, Toolbar, Divider } from '@material-ui/core'
import Link from '@material-ui/core/Link'

import Accordion from '@material-ui/core/Accordion'
import Button from '@material-ui/core/Button'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import AttachMoneyIcon from '@material-ui/icons/AttachMoney'
import Tooltip from '@material-ui/core/Tooltip'
import Zoom from '@material-ui/core/Zoom'
import PropTypes from 'prop-types'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import wordImg from '../../assets/images/download.png'
import isAdmin from '../../utils/isAdmin'
import { CustomDialog } from '../../shared/CustomModal'
import { FileForm } from '../admin/files/FileForm'

const File = ({ file }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleDialogClose = () => {
    setIsOpen(false)
  }

  const handleDialogOpen = () => {
    setIsOpen(true)
  }

  return (
    <Grid>
      <Paper elevation={0}>
        <Grid container spacing={2}>
          <Grid item md={1}>
            <img
              src={wordImg}
              alt=""
              style={{ width: '100%' }}
              className="file-image"
            />
          </Grid>
          <Grid item md={7}>
            <Typography
              style={{
                fontWeight: 500,
                fontSize: '1.2rem',
                lineHeight: 1.2,
                color: '#2F4F4F',
              }}
            >
              {file.name}
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
                  <Typography>{file.description}</Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </Grid>
          {isAdmin() === true ? (
            <Grid
              item
              md={2}
              sm={12}
              className="price-adds-to-cart"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Tooltip TransitionComponent={Zoom} title="Delete file">
                <Button
                  variant="contained"
                  color="secondary"
                  size="small"
                  disableElevation
                >
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
          ) : (
            <Grid
              item
              md={2}
              sm={12}
              className="price-adds-to-cart"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            />
          )}
          <Grid item md={2} sm={12} className="price-add-to-cart">
            <Typography>
              <Button
                variant="contained"
                style={{
                  color: '#ff8c00',
                  width: '100%',
                  marginBottom: 8,
                  backgroundColor: '#fff',
                }}
                disableElevation
              >
                <AttachMoneyIcon fontSize="large" />
                5.00
              </Button>
            </Typography>
            <Typography>
              <Tooltip TransitionComponent={Zoom} title="Add to cart">
                <Button
                  variant="contained"
                  style={{
                    color: '#ff8c00',
                    width: '100%',
                    backgroundColor: '#fff',
                  }}
                  disableElevation
                >
                  <AddShoppingCartIcon fontSize="large" />
                  Add to Cart
                </Button>
              </Tooltip>
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      <Toolbar />
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

File.propTypes = {
  file: PropTypes.object,
}

export default File
