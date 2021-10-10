import { Paper } from "@mui/material";
import React from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "16vw",
    minWidth: "180px",
    maxWidth: "220px",
    margin: "0px 8px",
    height: "345px",
    boxShadow: "0px 1px 8px rgba(0,0,0,0.2)",
    cursor: "pointer",
  },
  rootWithCards: {
    width: "16vw",
    minWidth: "180px",
    height: "345px",
    marginLeft: "20px",
    boxShadow: "0px 1px 8px rgba(0,0,0,0.2)",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: "4px",
  },
}));

const OfferCard = ({ parent, image }) => {
  const classNames = useStyles();
  return (
    <Paper className={parent ? classNames.rootWithCards : classNames.root}>
      <img
        src={
          image ||
          "https://cdn.grabon.in/gograbon/images/web-images/uploads/1618571140235/mobile-offers.jpg"
        }
        className={classNames.image}
        alt="offer"
      />
    </Paper>
  );
};

export default OfferCard;
