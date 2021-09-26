import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import { Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    padding: "30px",
    display: "flex",
    justifyContent: "space-evenly",
  },
  heading: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
    },
  },
  data: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "13px",
    },
  },
}));

const footer = [
  {
    name: "GET INFO",
    data: [
      "About Us",
      "Contact Us",
      "Return Policy",
      "Terms Of Use",
      "Privacy Policy",
    ],
  },
  {
    name: "HELP",
    data: ["Orders", "Payments", "Shipping", "Cancellation & Returns", "FAQ"],
  },
  {
    name: "SOCIAL",
    data: ["Facebook", "Instagram", "Twitter", "Linkedin"],
  },
  {
    name: "CONTACT DETAILS",
    data: [
      "H-Block hostel, gla university, mathura 281406",
      "Uttar Pradesh, India",
      "Mobile : 8750388075",
      "Mail : ecstasyteam@gmail.com",
    ],
  },
];

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Grid container className={classes.container}>
          {footer.map((item) => {
            return (
              <Grid
                item
                container
                justifyContent="space-around"
                xs={6}
                sm={2}
                style={{ fontSize: 15, marginBottom: "20px" }}
                direction="column"
              >
                <Grid item>
                  <Link
                    to="/dev"
                    className={`font-bold text-lg ${classes.heading}`}
                  >
                    {item.name}
                  </Link>
                </Grid>
                {item.data.map((data) => {
                  return (
                    <Grid item>
                      <Link to="/dev" className={`text-sm ${classes.data}`}>
                        {data}
                      </Link>
                    </Grid>
                  );
                })}
              </Grid>
            );
          })}
        </Grid>
        <Grid
          item
          container
          style={{
            backgroundColor: "rgb(10, 38, 118)",
            height: "80px",
            padding: "10px",
          }}
        >
          <Grid item xs={12}>
            <Typography variant="h5" style={{ textAlign: "center" }}>
              Ecstasy
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="body2"
              style={{
                textAlign: "center",
                fontSize: "15px",
              }}
            >
              &copy; 2021 Ecstasy.com
            </Typography>
          </Grid>
        </Grid>
      </AppBar>
    </div>
  );
}

export default React.memo(Footer);
