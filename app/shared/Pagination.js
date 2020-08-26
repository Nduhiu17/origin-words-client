import React from 'react'
import { Paper } from '@material-ui/core'
import TablePagination from '@material-ui/core/TablePagination'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { setSize } from '../actions/paginationActions'
import { loadFiles } from '../actions/filesActions'

const useStyles = makeStyles(theme => ({
  paper: {
    padding: 10,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}))

const Pagination = ({ count, handleChangeRowsPerPage, rowsPerPage }) => {
  const classes = useStyles()

  const [page, setPage] = React.useState(0)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  return (
    <Paper className={classes.paper} elevation={1}>
      <TablePagination
        component="div"
        count={count}
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
  count: PropTypes.number,
  handleChangeRowsPerPage: PropTypes.func,
}

export default Pagination
