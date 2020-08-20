import React from 'react'
import { Grid } from '@material-ui/core'

import PropTypes from 'prop-types'
import File from './File'

const FileList = ({ files }) => (
  <Grid>{files && files.map(file => <File file={file} key={file.id} />)}</Grid>
)

FileList.propTypes = {
  files: PropTypes.array,
}

export default FileList
