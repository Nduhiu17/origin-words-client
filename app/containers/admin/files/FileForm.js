import React from 'react'
import { Paper, Grid, TextField, Toolbar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormControl from '@material-ui/core/FormControl'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import SaveIcon from '@material-ui/icons/Save'
import Button from '@material-ui/core/Button'
import { CategorySelect } from '../../../shared/CategorySelect'
import SubCategorySelect from '../../../shared/SubCategorySelect'

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '80%',
    },
    TextField: {
      width: '100%',
    },
    button: {
      width: '80%',
    },
  },

  wrapper: {
    padding: 20,
  },
  upload: {
    padding: 12,
  },
  input: {
    display: 'none',
  },
}))

export const FileForm = () => {
  const classes = useStyles()

  const CHARACTER_LIMIT = 180
  const [values, setValues] = React.useState({
    title: 'title',
  })

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value })
  }

  return (
    <Grid>
      <Paper elevation={0} className={classes.wrapper}>
        <form className={classes.root} noValidate autoComplete="off">
          <Grid container>
            <Grid item md={12} sm={12} xs={12}>
              <Paper elevation={0}>
                <FormControl
                  fullWidth
                  className={classes.margin}
                  variant="outlined"
                >
                  <TextField
                    label="Title"
                    inputProps={{
                      maxLength: CHARACTER_LIMIT,
                    }}
                    value={values.title}
                    helperText={`${values.title.length}/${CHARACTER_LIMIT}`}
                    onChange={handleChange('title')}
                    margin="normal"
                    variant="outlined"
                  />
                </FormControl>
              </Paper>
            </Grid>
            <Toolbar />
            <Grid item md={12} sm={12} xs={12}>
              <Paper elevation={0} className={classes.upload}>
                <TextField name="upload file" type="file" />
              </Paper>
            </Grid>
            <Toolbar />
            <Toolbar />
            <Grid item md={12} sm={12} xs={12}>
              <Paper elevation={0}>
                <FormControl
                  fullWidth
                  className={classes.margin}
                  variant="outlined"
                >
                  <InputLabel htmlFor="outlined-adornment-amount">
                    Amount
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    value=""
                    startAdornment={
                      <InputAdornment position="start">$</InputAdornment>
                    }
                    labelWidth={60}
                  />
                </FormControl>
              </Paper>
            </Grid>
            <Toolbar />
            <Grid item md={12} sm={12} xs={12}>
              <Paper elevation={0}>
                <FormControl
                  fullWidth
                  className={classes.margin}
                  variant="outlined"
                >
                  <TextField
                    id="outlined-error-helper-text"
                    label="Description"
                    defaultValue="Description"
                    variant="outlined"
                    className={classes.TextField}
                    rows={20}
                    multiline
                    rowsMax={8}
                  />
                </FormControl>
              </Paper>
            </Grid>
            <Toolbar />
            <Grid item md={12} sm={12} xs={12}>
              <Grid item md={6} sm={12} xs={12}>
                <CategorySelect />
              </Grid>
            </Grid>
            <Toolbar />
            <Grid container>
              <Grid item md={12} sm={12} xs={12}>
                <Grid item md={6} sm={12} xs={12}>
                  <SubCategorySelect />
                </Grid>
              </Grid>
            </Grid>

            <Toolbar />
            <Grid>
              <Toolbar />
              <Grid item md={12} sm={12} xs={12}>
                <Button
                  variant="contained"
                  size="large"
                  className={classes.button}
                  startIcon={<SaveIcon />}
                  style={{ backgroundColor: '#ff8c00', color: '#fff' }}
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Grid>
  )
}
