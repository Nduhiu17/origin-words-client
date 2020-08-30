import React, { Component } from 'react'
import { Paper, Grid, TextField, Toolbar } from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl'
import SaveIcon from '@material-ui/icons/Save'
import Button from '@material-ui/core/Button'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { loadCategories } from '../../../actions/categoriesActions'
import { selectaSubCategory } from '../../../actions/selectAsubCategoryAction'
import { setSubCategoryCreateRequest } from '../../../actions/setSubCategoryRequestAction'
import { createSubCategory } from '../../../actions/createSubCategoryAction'
import { loadSubcategories } from '../../../actions/subcategoriesAction'

class SubCategoryForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      description: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.onSubcategorySubmit = this.onSubcategorySubmit.bind(this)
  }

  componentDidMount() {
    this.props.loadCategories()
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubcategorySubmit(e) {
    e.preventDefault()
    const subCategoryData = {
      name: this.state.name,
      description: this.state.description,
    }

    this.props.setSubCategoryCreateRequest(subCategoryData)
    // this.props.createSubCategory(subCategoryData)
    this.props.loadSubcategories()
    // history.push('/')
  }

  render() {
    const CHARACTER_LIMIT = 46
    const { name, description } = this.state
    const { categories } = this.props
    return (
      <Grid>
        <Paper elevation={0} style={{ padding: 20 }}>
          <form
            noValidate
            autoComplete="off"
            style={{ width: '80%' }}
            onSubmit={this.onSubcategorySubmit}
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
              <Toolbar />
              <Grid item md={12} sm={12} xs={12}>
                <Paper elevation={0}>
                  <FormControl style={{ width: '30%' }}>
                    <InputLabel id="demo-simple-select-helper-label">
                      Category
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      onChange={this.handleChange}
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
                              this.props.selectaSubCategory(item.id)
                            }
                          >
                            {item.name}
                          </MenuItem>
                        ))}
                    </Select>
                  </FormControl>
                </Paper>
              </Grid>
              <Toolbar />
              <Toolbar />
              <Grid>
                <Toolbar />
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
  isButtonLoading: state.isButtonLoading,
  categories: state.categories,
})

const mapDispatchToProps = dispatch => ({
  loadCategories: () => dispatch(loadCategories()),
  selectaSubCategory: selectedSubCat =>
    dispatch(selectaSubCategory(selectedSubCat)),
  setSubCategoryCreateRequest: subcategoryCreateRequest =>
    dispatch(setSubCategoryCreateRequest(subcategoryCreateRequest)),
  loadSubcategories: () => dispatch(loadSubcategories()),
})

SubCategoryForm.propTypes = {
  categories: PropTypes.array,
  loadCategories: PropTypes.func,
  setSubCategoryCreateRequest: PropTypes.func,
  selectaSubCategory: PropTypes.func,
  loadSubcategories: PropTypes.func,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SubCategoryForm)
