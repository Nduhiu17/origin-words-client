import React from "react";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AccountDetails from "./AccountDetails";
import Purchased from "./Purchased";
import Saved from "./Saved";

const accountRoutes = [
  {
    path: "/account/details",
    component: AccountDetails,
    name: "Account Details",
    icon: <AccountBoxIcon fontSize="large" style={{color:'#ff8c00'}}/>,
    routes: [],
  },
  {
    path: "/account/purchased",
    component: Purchased,
    name: "Purchased Items",
    icon: <ShoppingBasketIcon  fontSize="large" style={{color:'#ff8c00'}}/>,
    routes: [],
  },
  {
    path: "/account/saved",
    name: "Saved Items",
    component: Saved,
    icon: <FavoriteIcon fontSize="large" style={{color:'#ff8c00'}}/>,
    routes: [],
  },
];

export default accountRoutes;
