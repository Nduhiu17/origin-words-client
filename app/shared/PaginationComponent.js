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
import { setSize } from '../actions/paginationSizeActions'
import { changePage } from '../actions/changePageSizeActions'

class PaginationComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 0,
    }

    // this.handleChangePage = this.handleChangePage.bind(this)
  }

  componentDidMount() {
    this.props.loadCategories()
    this.props.loadSubcategories()
  }

  handleChangePage(event, newPage) {
    console.log(`we are  up meeen..............${newPage}`)
    this.props.changePage(1)
    // this.setState({
    //   page: newPage,
    // })
    // this.props.changePage(newPage)
    this.props.loadFiles()
  }
  // handleChangePage = (event, newPage) => {
  //   setPage(newPage)
  // };

  handleChangeRowsPerPage = event => {
    this.props.setSize(event.target.value)
    this.props.loadFiles()
  }

  render() {
    const {
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
            page={this.state.page}
            count={count}
            handleChangePage={newPage => this.handleChangePage(newPage)}
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
  // page: state.files.currentPage,
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
  handleSubcategoryChange: PropTypes.func,
  category: PropTypes.number,
  handleCategoryChange: PropTypes.func,
  page: PropTypes.number,
  count: PropTypes.number,
  rowsPerPage: PropTypes.number,
  categories: PropTypes.array.isRequired,
  loadSubcategories: PropTypes.func,
  loadCategories: PropTypes.func,
  setSize: PropTypes.func,
  loadFiles: PropTypes.func,
  changePage: PropTypes.func,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PaginationComponent)
