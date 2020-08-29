import React, { Component } from 'react'
import { Paper, Grid, TextField, Toolbar } from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl'
import SaveIcon from '@material-ui/icons/Save'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import history from '../../../utils/history'
import { setCategoryCreateRequest } from '../../../actions/createCategoryRequestAction'
import { createCategory } from '../../../actions/createCategoryActions'
import { loadCategories } from '../../../actions/categoriesActions'

class CategoryForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      description: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()
    const category = {
      name: this.state.name,
      description: this.state.description,
    }
    this.props.setCategoryCreateRequest(category)
    this.props.createCategory(category)
    this.props.loadCategories()
    // history.push('/')
  }

  render() {
    const CHARACTER_LIMIT = 46
    const { name, description } = this.state
    return (
      <Grid>
        <Paper elevation={0} style={{ padding: 20 }}>
          <form
            noValidate
            autoComplete="off"
            style={{ width: '80%' }}
            onSubmit={this.onSubmit}
          >
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
                      name="name"
                      variant="outlined"
                    />
                  </FormControl>
                </Paper>
              </Grid>
              <Toolbar />
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
                      fullWidth
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
              <Grid>
                <Grid item md={12} sm={12} xs={12}>
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<SaveIcon />}
                    style={{ backgroundColor: '#ff8c00', color: '#fff' }}
                    type="submit"
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
  isLoading: state.isLoading,
  error: state.error,
  isButtonLoading: state.isButtonLoading,
})

const mapDispatchToProps = dispatch => ({
  createCategory: category => dispatch(createCategory(category)),
  setCategoryCreateRequest: categoryCreateRequest =>
    dispatch(setCategoryCreateRequest(categoryCreateRequest)),
  loadCategories: () => dispatch(loadCategories()),
})

CategoryForm.propTypes = {
  setCategoryCreateRequest: PropTypes.func,
  createCategory: PropTypes.func,
  loadCategories: PropTypes.func,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategoryForm)
