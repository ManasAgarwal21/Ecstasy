import React from "react";
import { Paper, Typography, Grid, IconButton } from "@material-ui/core";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import ProductCard from "../Cards/ProductCard";
import ImageList from "./ImageListContainer";
import { makeStyles } from "@material-ui/core/styles";
import OfferCard from "./../Cards/OfferCard";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    boxShadow: "none",
    margin: "20px",
    backgroundColor: "transparent",
    justifyContent: "space-between",
  },
  list: {
    maxWidth: "calc(100% - 200px)",
    padding: "0px 20px",
    backgroundColor: "white",
    borderRadius: "4px",
    boxShadow: "0px 1px 8px rgba(0,0,0,0.2)",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "100%",
    },
  },
  fullWidthContainer: {
    margin: "20px",
    padding: "0px 10px",
    boxShadow: "0px 1px 8px rgba(0,0,0,0.2)",
  },
  head: {
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0px 15px",
  },
}));

const CardContainer = ({ title, anchor, id }) => {
  const selectedList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const classNames = useStyles();
  const [openCardContainer, setOpenCardConatiner] = React.useState(false);
  const [hasOffer, setHasOffer] = React.useState(false);

  React.useEffect(() => {
    if (anchor) setHasOffer(true);
  }, [anchor]);

  return (
    <Paper
      className={
        hasOffer ? classNames.container : classNames.fullWidthContainer
      }
    >
      <Grid container spacing={0} className={hasOffer ? classNames.list : ""}>
        <Grid item container cols={"auto"} className={classNames.head}>
          <Typography variant="h6">{title}</Typography>
          <button onClick={() => setOpenCardConatiner(!openCardContainer)}>
            <IconButton>
              {openCardContainer ? (
                <KeyboardArrowDownIcon />
              ) : (
                <KeyboardArrowRightIcon />
              )}
            </IconButton>
          </button>
        </Grid>
        {openCardContainer ? (
          <Grid item container spacing={0}>
            {selectedList.map((item, index) => {
              return (
                <Grid item xs={2} key={index}>
                  <ProductCard
                    props={{
                      name: "product name",
                      price: `${item}`,
                      rating: { rate: 2.5 },
                    }}
                  />
                </Grid>
              );
            })}
          </Grid>
        ) : (
          <ImageList id={id} />
        )}
      </Grid>
      {anchor && <OfferCard parent="container" />}
    </Paper>
  );
};

export default React.memo(CardContainer);
