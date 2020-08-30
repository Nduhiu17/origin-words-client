import React, { Component } from 'react'
import { Container, Paper, Grid, Toolbar } from '@material-ui/core'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import FileList from './file/FileList'
import Layout from './Layout'
import PaginationComponent from '../shared/PaginationComponent'
import { loadFiles } from '../actions/filesActions'

class MainContent extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount() {
    this.props.loadFiles()
  }

  render() {
    const {
      files: { files },
    } = this.props

    return (
      <Layout>
        <Container>
          <Paper
            style={{ marginTop: -50, padding: 20, height: 'auto' }}
            className="container"
            elevation={10}
          >
            <Toolbar />
            <div>
              <Grid container spacing={1}>
                <Grid container item xs={12} spacing={3}>
                  <PaginationComponent />
                </Grid>
              </Grid>
              <Toolbar />
              <FileList files={files} />
            </div>
          </Paper>
        </Container>
      </Layout>
    )
  }
}

const mapStateToProps = state => ({
  files: state.files,
})

const mapDispatchToProps = dispatch => ({
  loadFiles: () => dispatch(loadFiles()),
})

MainContent.propTypes = {
  loadFiles: PropTypes.func,
  files: PropTypes.object,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MainContent)
