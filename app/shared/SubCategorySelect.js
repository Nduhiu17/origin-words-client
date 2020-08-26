import React, { Component } from 'react'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import Select from '@material-ui/core/Select'
import { Paper } from '@material-ui/core'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { selectSubCategory } from '../actions/subCategorySelectAction'
import { loadFiles } from '../actions/filesActions'

class SubCategorySelect extends Component {
  handleClick = id => {
    this.props.selectSubCategory(id)
    this.props.loadFiles()
  }

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
                <MenuItem
                  value={item.id}
                  key={item.id}
                  onClick={() => {
                    this.handleClick(item.id)
                  }}
                >
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
  selectSubCategory: PropTypes.func,
}

const mapStateToProps = state => ({
  selectedSubcategories: state.selectedSubcategories.subcategories,
})

const mapDispatchToProps = dispatch => ({
  selectSubCategory: id => {
    dispatch(selectSubCategory(id))
  },
  loadFiles: () => dispatch(loadFiles()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SubCategorySelect)
