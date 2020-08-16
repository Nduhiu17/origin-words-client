import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

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

export const SubCategorySelect = () => {
  const classes = useStyles();

  const [age, setAge] = React.useState('');

  const handleSubcategoryChange = event => {
    setAge(event.target.value);
  };

  return (
    <Paper className={classes.paper} elevation={4}>
      <FormControl className={classes.formControl} fullWidth>
        <InputLabel id="demo-simple-select-helper-label">
          Subcategory
        </InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          onChange={handleSubcategoryChange}
          autoWidth
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10} dense>
            Medicalwwwww wwwwwwwwwwwwww wwwwwwwwwwwwwwwwwww
          </MenuItem>
          <MenuItem value={20}>Engineering</MenuItem>
          <MenuItem value={30}>Procurement</MenuItem>
        </Select>
        <FormHelperText>Select sub-category</FormHelperText>
      </FormControl>
    </Paper>
  );
};
