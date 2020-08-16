import React from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';

import TablePagination from '@material-ui/core/TablePagination';
import { CategorySelect } from './CategorySelect';
import { FileSearch } from './FileSearch';
import { SubCategorySelect } from './SubCategorySelect';

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
}));

const PaginationComponent = () => {
  const classes = useStyles();

  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <React.Fragment>
      <Grid item xs={12} md={3} sm={12}>
        <FileSearch />
      </Grid>
      <Grid item xs={12} md={3} sm={12}>
        <CategorySelect />
      </Grid>
      <Grid item xs={12} md={3} sm={12}>
        <SubCategorySelect />
      </Grid>
      <Grid item xs={12} md={3} sm={12}>
        <Paper className={classes.paper} elevation={4}>
          <Button
            variant="contained"
            color="inherit"
            size="large"
            className={classes.button}
            endIcon={<Icon>send</Icon>}
            disableElevation
            style={{ display: 'flex', width: '100%' }}
          >
            Search
          </Button>
        </Paper>
      </Grid>
      <Grid item xs={12} md={7} />

      <Grid item xs={12} md={5}>
        <Paper className={classes.paper} elevation={4}>
          <TablePagination
            component="div"
            count={100}
            page={page}
            onChangePage={handleChangePage}
            rowsPerPage={rowsPerPage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            fullWidth
          />
        </Paper>
      </Grid>
    </React.Fragment>
  );
};

export default PaginationComponent;
