import React, { useState } from 'react';
import { Paper } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import { makeStyles } from '@material-ui/core/styles';

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

export const CategorySelect = () => {
  const classes = useStyles();

  const [age, setAge] = useState('');

  const handleCategoryChange = event => {
    setAge(event.target.value);
  };

  return (
    <Paper className={classes.paper} elevation={4}>
      <FormControl className={classes.formControl} fullWidth>
        <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          onChange={handleCategoryChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Medical</MenuItem>
          <MenuItem value={20}>Engineering</MenuItem>
          <MenuItem value={30}>Procurement</MenuItem>
        </Select>
        <FormHelperText>Select category</FormHelperText>
      </FormControl>
    </Paper>
  );
};
