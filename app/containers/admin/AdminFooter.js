import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles((theme) => ({
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    position: "fixed",
    bottom: 0,
    left: 0,
    backgroundColor: "#fff",
    color: "#ff8c00",
  },
}));

export const AdminFooter = () => {
  const classes = useStyles();
  return (
    <Typography>
      <Toolbar></Toolbar>
      <AppBar position="static" className={classes.footer}>
        <Toolbar>
          <Typography component="span">&copy; Academic Hub</Typography>
        </Toolbar>
      </AppBar>
    </Typography>
  );
};
