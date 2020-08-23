import React from 'react'
import { Paper } from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { selectSubCategories } from '../actions/categorySelectAction'

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

function CategorySelect({ category, categories }) {
  const classes = useStyles()
  const dispatch = useDispatch()

  return (
    <Paper className={classes.paper} elevation={1}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={category}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {categories &&
            categories.map(item => (
              <MenuItem
                value={item.id}
                key={item.id}
                onClick={() =>
                  dispatch(selectSubCategories(item.subcategoriesList))
                }
              >
                {item.name}
              </MenuItem>
            ))}
        </Select>
        <FormHelperText>Select category</FormHelperText>
      </FormControl>
    </Paper>
  )
}

export { CategorySelect }

CategorySelect.propTypes = {
  category: PropTypes.number,
  categories: PropTypes.array.isRequired,
}
