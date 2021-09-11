import { Paper } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "16vw",
    height: "345px",
    boxShadow: "0px 1px 8px rgba(0,0,0,0.2)",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  image: {
    width: "100%",
    height: "100%",
  },
}));

const OfferCard = () => {
  const classNames = useStyles();
  return (
    <Paper className={classNames.root}>
      <img
        src="https://cdn.grabon.in/gograbon/images/web-images/uploads/1618571140235/mobile-offers.jpg"
        className={classNames.image}
        alt="offer"
      />
    </Paper>
  );
};

export default OfferCard;
