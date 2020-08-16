import React from "react";
import AdminDashboard from "./dashboard/AdminDashboard";
import DashboardIcon from "@material-ui/icons/Dashboard";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import CategoryIcon from "@material-ui/icons/Category";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import CategoryAndSubCategoryContainer from "./categories/CategoryAndSubCategoryContainer";

const dashboardRoutes = [
  {
    path: "/admin",
    component: AdminDashboard, // dashboard
    name: "Dasboard",
    icon: <DashboardIcon color="action" fontSize="large" />,
    routes: [],
  },
  {
    path: "/admin/files",
    component: FileList,
    name: "Files",
    icon: <LibraryBooksIcon color="action" fontSize="large" />,
    routes: [],
  },
  {
    path: "/admin/categories",
    component: CategoryAndSubCategoryContainer,
    name: "Categories",
    icon: <CategoryIcon color="action" fontSize="large" />,
    routes: [],
  },
];

export const supportRoutes = [
  {
    path: "/admin/users",
    component: AdminDashboard, // dashboard
    name: "Users",
    icon: <AccountCircleIcon color="action" fontSize="large" />,
    routes: [],
  },
  {
    path: "/admin/admin",
    component: FileList,
    name: "Orders",
    icon: <BusinessCenterIcon color="action" fontSize="large" />,
    routes: [],
  },
  {
    path: "/admin/market",
    component: FileList,
    name: "Accounts",
    icon: <AccountBalanceIcon color="action" fontSize="large" />,
    routes: [],
  },
];

export default dashboardRoutes;
