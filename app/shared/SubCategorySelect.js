import React, { Component } from 'react'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import Select from '@material-ui/core/Select'
// import { makeStyles } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// const useStyles = makeStyles(theme => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: 10,
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   },
//   margin: {
//     margin: theme.spacing(1),
//   },
//   button: {
//     margin: theme.spacing(1),
//     background: 'transparent',
//     padding: 14,
//     fontWeight: 600,
//     color: '#ff8c00',
//   },
// }))

class SubCategorySelect extends Component {
  render() {
    const { selectedSubcategories } = this.props
    const { subcategories } = selectedSubcategories

    console.log(`good progress${typeof subcategories}`)
    return (
      <Paper elevation={4}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-helper-label">
            Subcategory
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            // value={subCategory}
            // onChange={handleSubcategoryChange}
            autoWidth
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {/* {finalSubcategories && */}
            {/*  finalSubcategories.map(item => ( */}
            {/*    <MenuItem value={item.id} key={item.id} data-my-value={item.id}> */}
            {/*      {item.name} */}
            {/*    </MenuItem> */}
            {/*  ))} */}
          </Select>
          <FormHelperText>Select sub-category</FormHelperText>
        </FormControl>
      </Paper>
    )
  }
}

SubCategorySelect.propTypes = {}

const mapStateToProps = state => ({
  selectedSubcategories: state.selectedSubcategories,
})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SubCategorySelect)
