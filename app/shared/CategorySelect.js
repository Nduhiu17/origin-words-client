import React from 'react'
import { Paper } from '@material-ui/core'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

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

export const CategorySelect = ({
  category,
  handleCategoryChange,
  categories,
}) => {
  const classes = useStyles()

  return (
    <Paper className={classes.paper} elevation={4}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={category}
          onChange={handleCategoryChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {categories &&
            categories.map(item => (
              <MenuItem value={item.id} key={item.id}>
                {item.name}
              </MenuItem>
            ))}
        </Select>
        <FormHelperText>Select category</FormHelperText>
      </FormControl>
    </Paper>
  )
}

CategorySelect.propTypes = {
  category: PropTypes.number,
  handleCategoryChange: PropTypes.func,
  categories: PropTypes.array.isRequired,
}
