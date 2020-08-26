import React, { Component } from 'react'
import { Container, Paper, Grid, Toolbar } from '@material-ui/core'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import FileList from './file/FileList'
import Layout from './Layout'
import PaginationComponent from '../shared/PaginationComponent'
import { loadFiles } from '../actions/filesActions'
import { loadCategories } from '../actions/categoriesActions'
import { loadSubcategories } from '../actions/subcategoriesAction'
import { setSize } from '../actions/paginationActions'

class MainContent extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount() {
    this.props.loadFiles()
    this.props.loadCategories()
    this.props.loadSubcategories()
  }

  handleChangeRowsPerPage = event => {
    this.props.setSize(event.target.value)
    console.log(`we are here...............${event.target.value}`)
    this.props.loadFiles()
  }

  render() {
    const {
      files: { files },
      page,
      handleChangePage,
      rowsPerPage,
      count,
      category,
      handleCategoryChange,
      subCategory,
      handleSubcategoryChange,
      categories,
      subcategories,
    } = this.props

    return (
      <Layout>
        <Container>
          <Paper
            style={{ marginTop: -50, padding: 20, height: 'auto' }}
            className="container"
            elevation={10}
          >
            <Toolbar />
            <div>
              <Grid container spacing={1}>
                <Grid container item xs={12} spacing={3}>
                  <PaginationComponent
                    page={page}
                    rowsPerPage={rowsPerPage}
                    count={count}
                    handleChangeRowsPerPage={this.handleChangeRowsPerPage}
                    subCategory={subCategory}
                    handleChangePage={handleChangePage}
                    handleSubcategoryChange={handleSubcategoryChange}
                    handleCategoryChange={handleCategoryChange}
                    category={category}
                    categories={categories}
                    subcategories={subcategories}
                  />
                </Grid>
              </Grid>
              <hr />
              <Toolbar />
              <FileList files={files} />
            </div>
          </Paper>
        </Container>
      </Layout>
    )
  }
}

const mapStateToProps = state => ({
  isLoading: state.isLoading,
  files: state.files,
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
})

MainContent.propTypes = {
  loadFiles: PropTypes.func,
  loadCategories: PropTypes.func,
  files: PropTypes.object,
  subCategory: PropTypes.number,
  handleSubcategoryChange: PropTypes.func,
  category: PropTypes.number,
  handleCategoryChange: PropTypes.func,
  page: PropTypes.number,
  count: PropTypes.number,
  handleChangePage: PropTypes.func,
  handleChangeRowsPerPage: PropTypes.func,
  rowsPerPage: PropTypes.number,
  categories: PropTypes.array,
  subcategories: PropTypes.array,
  loadSubcategories: PropTypes.func,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainContent)
