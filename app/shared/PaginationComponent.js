import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Paper } from '@material-ui/core'

import PropTypes from 'prop-types'
import { CategorySelect } from './CategorySelect'
import { FileSearch } from './FileSearch'
import SubCategorySelect from './SubCategorySelect'
import Pagination from './Pagination'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: 10,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  margin: {
    margin: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
    background: 'transparent',
    padding: 14,
    fontWeight: 600,
    color: '#ff8c00',
  },
}))

const PaginationComponent = ({
  category,
  handleCategoryChange,
  subCategory,
  handleSubcategoryChange,
  page,
  handleChangePage,
  handleChangeRowsPerPage,
  rowsPerPage,
  categories,
  count,
}) => {
  const classes = useStyles()

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
          subCategory={subCategory}
          handleSubcategoryChange={handleSubcategoryChange}
          subcategories={categories}
        />
      </Grid>
      <Grid item xs={12} md={3} sm={12}>
        <Paper className={classes.paper} elevation={1}>
          <Button
            variant="contained"
            color="inherit"
            className={classes.button}
            disableElevation
            style={{ display: 'flex', width: '100%' }}
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
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          rowsPerPage={rowsPerPage}
        />
      </Grid>
    </React.Fragment>
  )
}

PaginationComponent.propTypes = {
  subCategory: PropTypes.number,
  handleSubcategoryChange: PropTypes.func,
  category: PropTypes.number,
  handleCategoryChange: PropTypes.func,
  page: PropTypes.number,
  count: PropTypes.number,
  handleChangePage: PropTypes.func,
  handleChangeRowsPerPage: PropTypes.func,
  rowsPerPage: PropTypes.number,
  categories: PropTypes.array.isRequired,
}

export default PaginationComponent
