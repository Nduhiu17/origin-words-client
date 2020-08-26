import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import { Grid, Paper } from '@material-ui/core'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { CategorySelect } from './CategorySelect'
import { FileSearch } from './FileSearch'
import SubCategorySelect from './SubCategorySelect'
import Pagination from './Pagination'
import { loadFiles } from '../actions/filesActions'
import { loadCategories } from '../actions/categoriesActions'
import { loadSubcategories } from '../actions/subcategoriesAction'
import { setSize } from '../actions/paginationActions'

class PaginationComponent extends Component {
  componentDidMount() {
    this.props.loadCategories()
    this.props.loadSubcategories()
  }

  handleChangePage(event, newPage) {}

  handleChangeRowsPerPage = event => {
    this.props.setSize(event.target.value)
    this.props.loadFiles()
  }

  render() {
    const {
      page,
      rowsPerPage,
      count,
      category,
      handleCategoryChange,
      handleSubcategoryChange,
      categories,
    } = this.props

    return (
      <React.Fragment>
        <Grid item xs={12} md={3} sm={12}>
          <FileSearch />
        </Grid>
        <Grid item xs={12} md={3} sm={12}>
          <CategorySelect
            category={category}
            handleCategoryChange={handleCategoryChange}
            categories={categories}
          />
        </Grid>
        <Grid item xs={12} md={3} sm={12}>
          <SubCategorySelect
            handleSubcategoryChange={handleSubcategoryChange}
            subcategories={categories}
          />
        </Grid>
        <Grid item xs={12} md={3} sm={12}>
          <Paper elevation={1} style={{ padding: 10 }}>
            <Button
              variant="contained"
              color="inherit"
              disableElevation
              style={{
                display: 'flex',
                width: '100%',
                padding: 23,
                fontWeight: 600,
                color: '#ff8c00',
                background: 'transparent',
              }}
            >
              Search
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={7} />

        <Grid item xs={12} md={5}>
          <Pagination
            page={0}
            count={count}
            handleChangePage={this.handleChangePage}
            handleChangeRowsPerPage={this.handleChangeRowsPerPage}
            rowsPerPage={rowsPerPage}
          />
        </Grid>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  isLoading: state.isLoading,
  error: state.error,
  categories: state.categories,
  subcategories: state.subcategories,
  page: state.files.currentPage,
  rowsPerPage: state.files.itemsPerPage,
  count: state.files.totalItems,
})

const mapDispatchToProps = dispatch => ({
  loadFiles: () => dispatch(loadFiles()),
  loadCategories: () => dispatch(loadCategories()),
  loadSubcategories: () => dispatch(loadSubcategories()),
  setSize: size => dispatch(setSize(size)),
  changePage: newPage => dispatch(changePage(newPage)),
})

PaginationComponent.propTypes = {
  subCategory: PropTypes.number,
  handleSubcategoryChange: PropTypes.func,
  category: PropTypes.number,
  handleCategoryChange: PropTypes.func,
  page: PropTypes.number,
  count: PropTypes.number,
  handleChangePage: PropTypes.func,
  rowsPerPage: PropTypes.number,
  categories: PropTypes.array.isRequired,
  loadSubcategories: PropTypes.func,
  loadCategories: PropTypes.func,
  setSize: PropTypes.func,
  loadFiles: PropTypes.func,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PaginationComponent)
