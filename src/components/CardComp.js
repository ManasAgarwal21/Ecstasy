import React from "react";
import { Container, Typography, Grid, IconButton } from "@material-ui/core";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import CardDemo from "./CardDemo";
import ImageList from './ImageList';

const selectedList = [1, 2, 3, 4, 5, 6, 7];
const CardComp = ({ title }) => {
  const [openCardContainer, setOpenCardConatiner] = React.useState(false);

  return (
    <Container disableGutters>
      <Grid container spacing={2}>
        <Grid item container alignItems="center" justifyContent="space-between">
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
          <Grid item container spacing={2}>
            {selectedList.map((item, index) => {
              return (
                <Grid item xs={3} key={index}>
                  <CardDemo />
                </Grid>
              );
            })}
          </Grid>
        ) : (
          <ImageList />
        )}
      </Grid>
    </Container>
  );
};

export default React.memo(CardComp);
