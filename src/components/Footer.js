import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import { Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop:20,
  },
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
    paddingLeft: 10,
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "#000033" }}>
        <Grid
          container
          className={classes.container}
          justifyContent="space-around"
        >
          <Grid item xs={5} />
          <Grid
            item
            container
            justifyContent="space-around"
            xs={2}
            style={{ fontSize: 15 }}
            spacing={1}
            direction="column"
          >
            <Grid item>
              <Link to="#">About</Link>
            </Grid>
            <Grid item>
              <Link to="#">Orders</Link>
            </Grid>
            <Grid item>
              <Link to="#">Change Password</Link>
            </Grid>
            <Grid item>
              <Link to="#">Order History</Link>
            </Grid>
            <Grid item>
              <Link to="#">Logout</Link>
            </Grid>
          </Grid>
          <Grid item xs={1}>
            <Typography variant="h4" style={{ marginTop: 50 }}>
              Ecstasy
            </Typography>
          </Grid>
          <Grid item xs={4} />
        </Grid>
      </AppBar>
    </div>
  );
}

export default React.memo(Footer);
