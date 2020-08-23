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

class MainContent extends Component {
  // constructor(props) {
  //   super(props)
  //
  //   this.state = {
  //     page: 1,
  //     rowsPerPage: 10,
  //     category: '',
  //     subCategory: '',
  //   }
  // }

  componentDidMount() {
    this.props.loadFiles()
    this.props.loadCategories()
    this.props.loadSubcategories()
  }

  // handleChangePage(newPage) {
  //   this.setState({
  //     page: newPage,
  //   })
  // }
  //
  // handleChangeRowsPerPage(event) {
  //   this.setState({
  //     rowsPerPage: parseInt(event.target.value, 10),
  //   })
  //   this.setState({
  //     page: 0,
  //   })
  // }
  //
  // handleCategoryChange(event) {
  //   this.setState({
  //     category: event.target.value,
  //   })
  // }
  //
  // handleSubcategoryChange(event) {
  //   this.setState({
  //     subCategory: event.target.value,
  //   })
  // }

  render() {
    const {
      files,
      page,
      handleChangePage,
      rowsPerPage,
      handleChangeRowsPerPage,
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
                    handleChangeRowsPerPage={handleChangeRowsPerPage}
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
})

const mapDispatchToProps = dispatch => ({
  loadFiles: () => dispatch(loadFiles()),
  loadCategories: () => dispatch(loadCategories()),
  loadSubcategories: () => dispatch(loadSubcategories()),
})

MainContent.propTypes = {
  loadFiles: PropTypes.func,
  loadCategories: PropTypes.func,
  files: PropTypes.array,
  subCategory: PropTypes.number,
  handleSubcategoryChange: PropTypes.func,
  category: PropTypes.number,
  handleCategoryChange: PropTypes.func,
  page: PropTypes.number,
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
