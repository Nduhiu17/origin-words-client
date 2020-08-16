import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Button, Toolbar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "80%",
    },
    wrapper: {
      display: "flex",
      flexDirection: "row",
    },
    button: {
      width: "80%",
    },
  },
}));

export default function LoginForm() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <Grid className={classes.wrapper} container>
        <Grid item md={12} sm={12} xs={12}>
          <TextField id="standard-basic" label="email/username" />
        </Grid>
        <Grid item md={12} sm={12} xs={12}>
          <TextField id="standard-basic" label="password" type="password" />
        </Grid>
        <Grid item md={12} sm={12} xs={12}>
          <Toolbar></Toolbar>
          <Button
            variant="contained"
            className={classes.button}
            style={{
              backgroundColor: "#F95700FF",
              color: "#fff",
              width: "80%",
            }}
          >
            LOGIN
          </Button>
        </Grid>
        <Grid item md={12} sm={12} xs={12}>
          <Toolbar></Toolbar>
          <Button
            variant="contained"
            className={classes.button}
            fullWidth
            style={{ backgroundColor: "#40588A", color: "#fff", width: "80%" }}
          >
            LOGIN WITH FACEBOOK
          </Button>
        </Grid>
        <Grid item md={12} sm={12} xs={12}>
          <Toolbar></Toolbar>
          <Button
            variant="contained"
            className={classes.button}
            style={{ backgroundColor: "#1da1f2", color: "#fff", width: "80%" }}
          >
            LOGIN WITH TWITTER
          </Button>
        </Grid>
        <Grid item md={12} sm={12} xs={12}>
          <Toolbar></Toolbar>
          <Button
            variant="contained"
            className={classes.button}
            style={{ backgroundColor: "#4285f4", color: "#fff", width: "80%" }}
          >
            LOGIN WITH GMAIL
          </Button>
        </Grid>
        <Toolbar></Toolbar>
      </Grid>
    </form>
  );
}
