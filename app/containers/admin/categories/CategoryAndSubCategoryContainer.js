import React from 'react'
import { Paper, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import AdminLayout from '../AdminLayout'
import CategoryList from './CategoryList'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}))

const CategoryAndSubCategoryContainer = () => {
  const classes = useStyles()
  return (
    <AdminLayout>
      <Grid container spacing={4}>
        <Grid item md={6} xs={12} sm={12}>
          <Paper className={classes.paper} elevation={4}>
            <CategoryList headTitle="Categories" />
          </Paper>
        </Grid>
        <Grid item md={6} xs={12} sm={12}>
          <Paper className={classes.paper} elevation={4}>
            <CategoryList headTitle="Sub Categories" />
          </Paper>
        </Grid>
      </Grid>
    </AdminLayout>
  )
}

export default CategoryAndSubCategoryContainer
