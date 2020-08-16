import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

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
  },
  links: {
    textDecoration: 'none',
  },
}));

export default function NavMenu() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: '#fff' }}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link to="/">Academic Hub</Link>
          </Typography>
          <Link to="/admin" className={classes.links}>
            <Button className={classes.badge}>ADMIN DASHBOARD</Button>
          </Link>

          <Link to="/cart" className={classes.links}>
            <Button className={classes.badge}>
              <Badge badgeContent={4} color="secondary" className="">
                <ShoppingCartIcon />
              </Badge>
              Cart
            </Button>
          </Link>

          <Button className={classes.badge} onClick={handleClick}>
            Login
          </Button>

          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
            autoFocus
          >
            <Link to="/login" className={classes.links}>
              <MenuItem onClick={handleClose}>Login</MenuItem>
            </Link>

            <Link to="/account/details" className={classes.links}>
              <MenuItem onClick={handleClose}>My Account</MenuItem>
            </Link>

            <Link to="/register" className={classes.links}>
              <MenuItem onClick={handleClose}>Register</MenuItem>
            </Link>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}
