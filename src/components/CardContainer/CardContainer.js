import React from "react";
import { Paper, Typography, Grid, IconButton } from "@material-ui/core";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import ProductCard from "../ProductCard";
import ImageList from "./ImageList";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "20px",
    padding: "0px 10px",
    boxShadow: "none",
  },
  head: {
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0px 15px",
  },
}));

const selectedList = [1, 2, 3, 4, 5, 6, 7];

const CardContainer = ({ title }) => {
  const classNames = useStyles();
  const [openCardContainer, setOpenCardConatiner] = React.useState(false);

  return (
    <Paper className={classNames.container}>
      <Grid container spacing={0}>
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
                    }}
                  />
                </Grid>
              );
            })}
          </Grid>
        ) : (
          <ImageList />
        )}
      </Grid>
    </Paper>
  );
};

export default React.memo(CardContainer);
