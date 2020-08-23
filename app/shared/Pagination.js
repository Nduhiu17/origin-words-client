import React from 'react'
import { Paper } from '@material-ui/core'
import TablePagination from '@material-ui/core/TablePagination'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

const useStyles = makeStyles(theme => ({
  paper: {
    padding: 10,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}))

const Pagination = ({
  page,
  handleChangePage,
  rowsPerPage,
  handleChangeRowsPerPage,
}) => {
  const classes = useStyles()

  return (
    <Paper className={classes.paper} elevation={1}>
      <TablePagination
        component="div"
        count={100}
        page={page}
        onChangePage={handleChangePage}
        rowsPerPage={rowsPerPage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  )
}

Pagination.propTypes = {
  page: PropTypes.number,
  handleChangePage: PropTypes.func,
  rowsPerPage: PropTypes.number,
  handleChangeRowsPerPage: PropTypes.func,
}

export default Pagination
