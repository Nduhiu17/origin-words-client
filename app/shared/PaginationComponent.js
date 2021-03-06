import React, { Component, useState } from 'react'
import Button from '@material-ui/core/Button'
import { Grid, Paper } from '@material-ui/core'

import PropTypes from 'prop-types'
import { connect, useDispatch } from 'react-redux'
import { CategorySelect } from './CategorySelect'
import { FileSearch } from './FileSearch'
import SubCategorySelect from './SubCategorySelect'
import Pagination from './Pagination'
import { loadFiles } from '../actions/filesActions'
import { loadCategories } from '../actions/categoriesActions'
import { loadSubcategories } from '../actions/subcategoriesAction'
import { setSize } from '../actions/paginationSizeActions'
import { changePage } from '../actions/changePageSizeActions'
import { setSearchTerm } from '../actions/searchTermActions'

class PaginationComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 0,
      searchKeyword: '',
    }

    this.handlePageChange = this.handlePageChange.bind(this)
  }

  componentDidMount() {
    this.props.loadCategories()
    this.props.loadSubcategories()
  }

  handlePageChange(event, value) {
    this.props.changePage(value)
    this.setState(
      {
        page: value,
      },
      () => {
        this.props.loadFiles()
      },
    )
  }

  handleChangeRowsPerPage = event => {
    this.props.setSize(event.target.value)
    this.props.loadFiles()
  }

  handleSearchChange = event => {
    this.setState({
      searchKeyword: event.target.value,
    })
    this.props.setSearchKeyword(event.target.value)
  }

  render() {
    const {
      rowsPerPage,
      count,
      category,
      handleCategoryChange,
      handleSubcategoryChange,
      categories,
      // loadFiles,
    } = this.props

    const { page } = this.state

    return (
      <React.Fragment>
        <Grid item xs={12} md={3} sm={12}>
          <FileSearch handleSearchChange={this.handleSearchChange} />
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
              disabled={!this.state.searchKeyword}
              style={{
                display: 'flex',
                width: '100%',
                padding: 23,
                fontWeight: 600,
                color: '#ff8c00',
                background: 'transparent',
              }}
              onClick={this.props.loadFiles}
            >
              Search
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} md={7} />

        <Grid item xs={12} md={5}>
          <Pagination
            page={page}
            count={count}
            handleChangePage={this.handlePageChange}
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
  page: state.page,
  rowsPerPage: state.files.itemsPerPage,
  count: state.files.totalPages,
})

const mapDispatchToProps = dispatch => ({
  loadFiles: () => dispatch(loadFiles()),
  loadCategories: () => dispatch(loadCategories()),
  loadSubcategories: () => dispatch(loadSubcategories()),
  setSize: size => dispatch(setSize(size)),
  changePage: newPage => dispatch(changePage(newPage)),
  setSearchKeyword: searchKeyword => dispatch(setSearchTerm(searchKeyword)),
})

PaginationComponent.propTypes = {
  handleSubcategoryChange: PropTypes.func,
  category: PropTypes.number,
  handleCategoryChange: PropTypes.func,
  count: PropTypes.number,
  rowsPerPage: PropTypes.number,
  categories: PropTypes.array.isRequired,
  loadSubcategories: PropTypes.func,
  loadCategories: PropTypes.func,
  setSize: PropTypes.func,
  loadFiles: PropTypes.func,
  changePage: PropTypes.func,
  setSearchKeyword: PropTypes.func,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PaginationComponent)
