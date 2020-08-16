import React from 'react'
import AccountBoxIcon from '@material-ui/icons/AccountBox'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import FavoriteIcon from '@material-ui/icons/Favorite'

const accountRoutes = [
  {
    path: '/account/details',
    name: 'Account Details',
    icon: <AccountBoxIcon fontSize="large" style={{ color: '#ff8c00' }} />,
    routes: [],
  },
  {
    path: '/account/purchased',
    name: 'Purchased Items',
    icon: <ShoppingBasketIcon fontSize="large" style={{ color: '#ff8c00' }} />,
    routes: [],
  },
  {
    path: '/account/saved',
    name: 'Saved Items',
    icon: <FavoriteIcon fontSize="large" style={{ color: '#ff8c00' }} />,
    routes: [],
  },
]

export default accountRoutes
