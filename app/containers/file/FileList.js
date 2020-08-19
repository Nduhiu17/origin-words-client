import React, { useEffect, Component } from 'react'
import { Grid } from '@material-ui/core'

import { connect } from 'react-redux'
import File from './File'
import { loadFiles } from '../../actions'

class FileList extends Component {
  componentDidMount() {
    this.props.loadFiles()
  }

  render() {
    const { files, error, isLoading } = this.props
    return (
      <Grid>
        {files && files.map((file,index) => (
        <File file={file} key={index}/>
        ))}
      </Grid>
    )
  }
}

const mapStateToProps = ({ isLoading, files, error }) => ({
  isLoading,
  files,
  error,
})

const mapDispatchToProps = dispatch => ({
  loadFiles: () => dispatch(loadFiles()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FileList)