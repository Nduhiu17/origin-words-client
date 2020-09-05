import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import { Grid, Button, Toolbar } from '@material-ui/core'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { registerUser } from '../../../actions/registerActions'
import { setRegisterRequest } from '../../../actions/registerRequestActions'
import history from '../../../utils/history'

class RegisterForm extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

    this.state = {
      email: '',
      username: '',
      name: '',
      password: '',
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()
    const user = {
      username: this.state.username,
      email: this.state.email,
      name: this.state.name,
      password: this.state.password,
    }

    this.props.setRegisterRequest(user)
    this.props.registerUser(user)
    history.push('/login')
  }

  render() {
    const { name, email, username, password } = this.state
    return (
      <form
        noValidate
        autoComplete="off"
        style={{ width: '80%' }}
        onSubmit={this.onSubmit}
      >
        <Grid container style={{ display: 'flex', flexDirection: 'row' }}>
          <Grid item md={12} sm={12} xs={12}>
            <TextField
              label="Full Name"
              name="name"
              value={name}
              type="text"
              onChange={this.handleChange}
              fullWidth
            />
          </Grid>
          <Grid item md={12} sm={12} xs={12}>
            <TextField
              label="email"
              name="email"
              value={email}
              type="text"
              onChange={this.handleChange}
              fullWidth
            />
          </Grid>
          <Grid item md={12} sm={12} xs={12}>
            <TextField
              label="username"
              type="text"
              name="username"
              value={username}
              onChange={this.handleChange}
              fullWidth
            />
          </Grid>
          <Grid item md={12} sm={12} xs={12}>
            <TextField
              label="password"
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              fullWidth
            />
          </Grid>
          <Grid item md={12} sm={12} xs={12}>
            <Toolbar />
            <Button
              variant="contained"
              type="submit"
              style={{
                backgroundColor: '#F95700FF',
                color: '#fff',
                width: '80%',
              }}
            >
              REGISTER
            </Button>
          </Grid>
          <Grid item md={12} sm={12} xs={12}>
            <Toolbar />
            <Button
              variant="contained"
              fullWidth
              style={{
                backgroundColor: '#40588A',
                color: '#fff',
                width: '80%',
              }}
            >
              REGISTER WITH FACEBOOK
            </Button>
          </Grid>
          <Grid item md={12} sm={12} xs={12}>
            <Toolbar />
            <Button
              variant="contained"
              style={{
                backgroundColor: '#1da1f2',
                color: '#fff',
                width: '80%',
              }}
            >
              REGISTER WITH TWITTER
            </Button>
          </Grid>

          <Toolbar />
        </Grid>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  isButtonLoading: state.isButtonLoading,
})

const mapDispatchToProps = dispatch => ({
  registerUser: user => dispatch(registerUser(user)),
  setRegisterRequest: registerRequest =>
    dispatch(setRegisterRequest(registerRequest)),
})

RegisterForm.propTypes = {
  registerUser: PropTypes.func,
  setRegisterRequest: PropTypes.func,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegisterForm)
