import React from 'react'
import DashboardIcon from '@material-ui/icons/Dashboard'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks'
import CategoryIcon from '@material-ui/icons/Category'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance'

const dashboardRoutes = [
  {
    path: '/admin',
    name: 'Dasboard',
    icon: <DashboardIcon color="action" fontSize="large" />,
    routes: [],
  },
  {
    path: '/admin/files',
    name: 'Files',
    icon: <LibraryBooksIcon color="action" fontSize="large" />,
    routes: [],
  },
  {
    path: '/admin/categories',
    name: 'Categories',
    icon: <CategoryIcon color="action" fontSize="large" />,
    routes: [],
  },
];

export const supportRoutes = [
  {
    path: '/admin/users',
    name: 'Users',
    icon: <AccountCircleIcon color="action" fontSize="large" />,
    routes: [],
  },
  {
    path: '/admin/admin',
    name: 'Orders',
    icon: <BusinessCenterIcon color="action" fontSize="large" />,
    routes: [],
  },
  {
    path: '/admin/market',
    name: 'Accounts',
    icon: <AccountBalanceIcon color="action" fontSize="large" />,
    routes: [],
  },
];

export default dashboardRoutes;
