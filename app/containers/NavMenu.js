import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import Badge from '@material-ui/core/Badge'
import { Link } from 'react-router-dom'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { connect } from 'react-redux'
import LOGO from '../assets/images/logo.jpeg'
import history from '../utils/history'
import isAdmin from '../utils/isAdmin'
import isLoggedIn from '../utils/isLoggedIn'
import { addToCart } from '../actions/cartActions'
import { setSnackbar } from '../reducers/snackbarReducer'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    zIndex: 4,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  AppBar: {
    // backgroundColor: "#fff",
  },
  badge: {
    border: `2px solid ${theme.palette.background.paper}`,
    fontSize: '12px',
    textTransform: 'capitalize',
  },
  links: {
    textDecoration: 'none',
  },
}))

const NavMenu = props => {
  const classes = useStyles()

  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleLogout = () => {
    localStorage.removeItem('user')
    history.push('/')
    setAnchorEl(null)
  }

  const user = JSON.parse(localStorage.getItem('user'))
  let loggedInUser = ''
  if (user) {
    loggedInUser = user.user.name
  }

  const { addedItems } = props

  const totalItems = addedItems.length

  console.log(`total>>>>>>>>${totalItems}`)

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: '#fff' }}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/">
              <img src={LOGO} alt="logo" style={{ width: 100 }} />
            </Link>
          </Typography>
          {isAdmin() ? (
            <Link to="/admin" className={classes.links}>
              <Button className={classes.badge}>Admin Dashboard</Button>
            </Link>
          ) : (
            ''
          )}

          <Link to="/cart" className={classes.links}>
            <Button className={classes.badge}>
              <Badge
                badgeContent={totalItems || '0'}
                color="secondary"
                className=""
              >
                <ShoppingCartIcon />
              </Badge>
              Cart
            </Button>
          </Link>

          <Button className={classes.badge} onClick={handleClick}>
            {loggedInUser && loggedInUser.length > 0
              ? `Welcome ${loggedInUser}`
              : 'Login'}
          </Button>

          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            autoFocus
          >
            {isLoggedIn() ? (
              ''
            ) : (
              <Link to="/login" className={classes.links}>
                <MenuItem onClick={handleClose}>Login</MenuItem>
              </Link>
            )}

            <Link to="/account/details" className={classes.links}>
              <MenuItem onClick={handleClose}>My Account</MenuItem>
            </Link>

            {isLoggedIn() ? (
              ''
            ) : (
              <Link to="/register" className={classes.links}>
                <MenuItem onClick={handleClose}>Register</MenuItem>
              </Link>
            )}

            {isLoggedIn() ? (
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            ) : (
              ''
            )}
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  )
}

const mapStateToProps = state => ({
  addedItems: state.cartReducer.addedItems,
})

const mapDispatchToProps = dispatch => ({
  addToCart: (id, files) => {
    dispatch(addToCart(id, files))
  },
  setSnackbar: () => {
    dispatch(setSnackbar(true, 'success', 'Added to cart'))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavMenu)
