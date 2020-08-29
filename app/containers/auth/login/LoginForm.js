import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import { Grid, Button, Toolbar } from '@material-ui/core'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CircularProgress from '@material-ui/core/CircularProgress'
import { loginUser } from '../../../actions/loginActions'
import { setLoginRequest } from '../../../actions/loginRequestActions'
import history from '../../../utils/history'

class LoginForm extends Component {
  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

    this.state = {
      usernameOrEmail: '',
      password: '',
    }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()
    const user = {
      usernameOrEmail: this.state.usernameOrEmail,
      password: this.state.password,
    }
    this.props.setLoginRequest(user)
    this.props.loginUser(user)
    history.push('/')
  }

  render() {
    const { isButtonLoading } = this.props
    const { usernameOrEmail, password } = this.state

    return (
      <form
        noValidate
        autoComplete="off"
        style={{ width: '100%', padding: 4 }}
        onSubmit={this.onSubmit}
      >
        <Grid container style={{ display: 'flex', flexDirection: 'row' }}>
          <Grid item md={12} sm={12} xs={12}>
            <TextField
              id="standard-basic12s"
              label="email/username"
              name="usernameOrEmail"
              value={usernameOrEmail}
              onChange={this.handleChange}
              required
              fullWidth
            />
          </Grid>
          <Grid item md={12} sm={12} xs={12}>
            <TextField
              id="standard-basic12sde"
              label="password"
              type="password"
              name="password"
              onChange={this.handleChange}
              value={password}
              required
              fullWidth
            />
          </Grid>
          <Grid item md={12} sm={12} xs={12}>
            <Toolbar />
            <Button
              variant="contained"
              style={{
                backgroundColor: '#F95700FF',
                color: '#fff',
                width: '60%',
              }}
              type="submit"
              disabled={usernameOrEmail.length <= 0 || password.length <= 0}
            >
              {isButtonLoading ? (
                <CircularProgress size={20} style={{ color: '#fff' }} />
              ) : (
                'Login'
              )}
            </Button>
          </Grid>
          <Toolbar />
        </Grid>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  isLoading: state.isLoading,
  error: state.error,
  isButtonLoading: state.isButtonLoading,
})

const mapDispatchToProps = dispatch => ({
  loginUser: user => dispatch(loginUser(user)),
  setLoginRequest: loginRequest => dispatch(setLoginRequest(loginRequest)),
})

LoginForm.propTypes = {
  loginUser: PropTypes.func,
  setLoginRequest: PropTypes.func,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm)
