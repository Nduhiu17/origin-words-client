import React, { Component } from 'react'
import { Paper, Grid, TextField, Toolbar } from '@material-ui/core'

import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormControl from '@material-ui/core/FormControl'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import SaveIcon from '@material-ui/icons/Save'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { loadCategories } from '../../../actions/categoriesActions'
import { selectSubCategories } from '../../../actions/categorySelectAction'
import { setSnackbar } from '../../../reducers/snackbarReducer'

class FileForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      description: '',
      price: '',
      selectedFile: null,
      categoryId: null,
      subcategoryId: null,
    }

    this.handleCategoryChange = this.handleCategoryChange.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.onFileUpload = this.onFileUpload.bind(this)
    this.onFileChange = this.onFileChange.bind(this)
  }

  componentDidMount() {
    this.props.loadCategories()
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  // handleCategoryChange(id) {
  //   console.log(`event.target.value${event.target.value}`)
  //   this.setState({
  //     categoryId: id,
  //   })
  // }

  handleCategoryChange = (subcategoriesList, categoryID) => {
    this.props.selectSubCategories(subcategoriesList)
    this.setState({
      categoryId: categoryID,
    })
  }

  handleSubcategorySelect = subCategoryID => {
    this.setState({
      subcategoryId: subCategoryID,
    })
  }

  onFileChange = event => {
    this.setState({ selectedFile: event.target.files[0] })
  }

  onFileUpload = () => {
    const fileUploadRequest = new FormData()
    fileUploadRequest.append('file', this.state.selectedFile)

    fetch('http://localhost:8089/api/v1/files', {
      method: 'POST',
      body: fileUploadRequest,
    })
      .then(res => res.json())
      .then(data => {
        localStorage.setItem('data', JSON.stringify(data))
        if (data.error) {
          localStorage.setItem('datae', JSON.stringify(data.error))
          return this.props.setSnackbar(
            true,
            'error',
            'An error occurred while uploading!',
          )
        }
        if (data.url) {
          const fileData = {
            name: this.state.name,
            description: this.state.description,
            price: this.state.price,
          }
          fetch(
            `http://localhost:8089/api/v1/files/create-file/${
              this.state.categoryId
            }/${this.state.subcategoryId}`,
            {
              method: 'POST',
              headers: {
                'content-type': 'application/json',
              },
              body: JSON.stringify(fileData),
            },
          )
            .then(res => res.json())
            .then(results => {
              localStorage.setItem('results', JSON.stringify(results))
            })
        }
      })
  }

  render() {
    const CHARACTER_LIMIT = 180
    const { name, description, price } = this.state
    const { categories, subcategories } = this.props
    return (
      <Grid>
        <Paper elevation={0} style={{ padding: 20 }}>
          <form style={{ width: '80%' }} noValidate autoComplete="off">
            <Grid container>
              <Grid item md={12} sm={12} xs={12}>
                <Paper elevation={0}>
                  <FormControl fullWidth variant="outlined">
                    <TextField
                      label="Title"
                      inputProps={{
                        maxLength: CHARACTER_LIMIT,
                      }}
                      value={name}
                      helperText={`${name.length}/${CHARACTER_LIMIT}`}
                      onChange={this.handleChange}
                      margin="normal"
                      variant="outlined"
                      name="name"
                    />
                  </FormControl>
                </Paper>
              </Grid>
              <Toolbar />
              <Grid item md={12} sm={12} xs={12}>
                <Paper elevation={0} style={{ padding: 12 }}>
                  <TextField
                    name="custom-file"
                    type="file"
                    required
                    onChange={this.onFileChange}
                    id="raised-button-file"
                    multiple
                  />
                </Paper>
              </Grid>
              <Toolbar />
              <Toolbar />
              <Grid item md={12} sm={12} xs={12}>
                <Paper elevation={0}>
                  <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-amount">
                      Amount
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-amount"
                      value={price}
                      name="price"
                      onChange={this.handleChange}
                      startAdornment={
                        <InputAdornment position="start">$</InputAdornment>
                      }
                      labelWidth={60}
                    />
                  </FormControl>
                </Paper>
              </Grid>
              <Toolbar />
              <Grid item md={12} sm={12} xs={12}>
                <Paper elevation={0}>
                  <FormControl fullWidth variant="outlined">
                    <TextField
                      id="outlined-error-helper-text"
                      label="Description"
                      defaultValue="Description"
                      variant="outlined"
                      rows={20}
                      multiline
                      rowsMax={8}
                      value={description}
                      name="description"
                      onChange={this.handleChange}
                    />
                  </FormControl>
                </Paper>
              </Grid>
              <Toolbar />
              <Grid item md={12} sm={12} xs={12}>
                <Grid item md={6} sm={12} xs={12}>
                  <Paper elevation={0}>
                    <Paper elevation={0}>
                      <FormControl style={{ width: '100%', height: '5%' }}>
                        <InputLabel id="demo-simple-select-helper-label">
                          Select category
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-helper-label"
                          style={{ width: '100%', height: '5%' }}
                        >
                          <MenuItem value="">
                            <em>Select</em>
                          </MenuItem>
                          {categories &&
                            categories.map(item => (
                              <MenuItem
                                value={item.id}
                                key={item.id}
                                onClick={() =>
                                  this.handleCategoryChange(
                                    item.subcategoriesList,
                                    item.id,
                                  )
                                }
                              >
                                {item.name}
                              </MenuItem>
                            ))}
                        </Select>
                      </FormControl>
                    </Paper>
                  </Paper>
                </Grid>
              </Grid>
              <Toolbar />
              <Grid container>
                <Grid item md={12} sm={12} xs={12}>
                  <Grid item md={6} sm={12} xs={12}>
                    <Paper elevation={0}>
                      <FormControl style={{ width: '100%', height: '5%' }}>
                        <InputLabel id="demo-simple-select-helper-label">
                          Subcategory
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-helper-label"
                          onChange={this.handleChange}
                          style={{ width: '100%', height: '5%' }}
                        >
                          <MenuItem value="">
                            <em>Select</em>
                          </MenuItem>
                          {subcategories &&
                            subcategories.map(item => (
                              <MenuItem
                                value={item.id}
                                key={item.id}
                                onClick={() =>
                                  this.handleSubcategorySelect(item.id)
                                }
                              >
                                {item.name}
                              </MenuItem>
                            ))}
                        </Select>
                      </FormControl>
                    </Paper>
                  </Grid>
                </Grid>
              </Grid>

              <Toolbar />
              <Grid>
                <Toolbar />
                <Grid item md={12} sm={12} xs={12}>
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<SaveIcon />}
                    style={{ backgroundColor: '#ff8c00', color: '#fff' }}
                    onClick={this.onFileUpload}
                  >
                    Save
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    )
  }
}

const mapStateToProps = state => ({
  files: state.files,
  categories: state.categories,
  subcategories: state.selectedSubcategories.subcategories,
})

const mapDispatchToProps = dispatch => ({
  loadCategories: () => dispatch(loadCategories()),
  selectSubCategories: id => dispatch(selectSubCategories(id)),
  setSnackbar: () =>
    dispatch(setSnackbar(true, 'error', 'An error occurred while uploading!')),
})

FileForm.propTypes = {
  loadFiles: PropTypes.func,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FileForm)
