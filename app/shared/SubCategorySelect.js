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

class SubCategorySelect extends Component {
  render() {
    const { selectedSubcategories } = this.props
    return (
      <Paper elevation={1} style={{ padding: 10 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-helper-label">
            Subcategory
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            fullWidth
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {selectedSubcategories &&
              selectedSubcategories.map(item => (
                <MenuItem value={item.id} key={item.id} data-my-value={item.id}>
                  {item.name}
                </MenuItem>
              ))}
          </Select>
          <FormHelperText>Select sub-category</FormHelperText>
        </FormControl>
      </Paper>
    )
  }
}

SubCategorySelect.propTypes = {
  selectedSubcategories: PropTypes.array,
}

const mapStateToProps = state => ({
  selectedSubcategories: state.selectedSubcategories.subcategories,
})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SubCategorySelect)
