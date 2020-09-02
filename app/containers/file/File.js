import React, { Component, useState } from 'react'
import { Paper, Grid, Typography, Toolbar } from '@material-ui/core'
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
import { connect } from 'react-redux'
import wordImg from '../../assets/images/download.png'
import isAdmin from '../../utils/isAdmin'
import { CustomDialog } from '../../shared/CustomModal'
import FileForm from '../admin/files/FileForm'
import { addToCart } from '../../actions/cartActions'
import { setSnackbar } from '../../reducers/snackbarReducer'

const File = props => {
  const [isOpen, setIsOpen] = useState(false)

  const handleDialogClose = () => {
    setIsOpen(false)
  }

  const handleDialogOpen = () => {
    setIsOpen(true)
  }

  const handleAddToCartClick = id => {
    console.log(`id>>>>>>>>>>${id}`)
    props.addToCart(id, props.files)
    props.setSnackbar(true, 'success', 'success')
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
          <Grid item md={8}>
            <Typography
              style={{
                fontWeight: 500,
                fontSize: '1.2rem',
                lineHeight: 1.2,
                color: '#2F4F4F',
              }}
            >
              {props.file.name}
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
                  <Typography>{props.file.description}</Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </Grid>
          {isAdmin() === true ? (
            <Grid
              item
              md={1}
              sm={12}
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Typography style={{ marginBottom: 40 }}>
                <Tooltip TransitionComponent={Zoom} title="Delete record">
                  <DeleteIcon color="secondary" fontSize="small" />
                </Tooltip>
              </Typography>
              <Typography>
                <Tooltip TransitionComponent={Zoom} title="Add to cart">
                  <Tooltip TransitionComponent={Zoom} title="Edit content">
                    <EditIcon
                      color="action"
                      fontSize="small"
                      onClick={handleDialogOpen}
                    />
                  </Tooltip>
                </Tooltip>
              </Typography>
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
          <Grid item md={2} sm={12} className="price-add-cto-cart">
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
                {props.file.price}
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
                  onClick={() =>
                    handleAddToCartClick(props.file.id, props.files)
                  }
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
  addToCart: PropTypes.func,
}

const mapStateToProps = state => ({
  files: state.files.files,
})

const mapDispatchToProps = dispatch => ({
  addToCart: (id, files) => {
    dispatch(addToCart(id, files))
  },
  setSnackbar: () => {
    dispatch(setSnackbar(true, 'success', 'Added to cart'))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(File)
