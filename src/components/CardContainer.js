import React from "react";
import { Container, Typography, Grid, IconButton } from "@material-ui/core";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

const list = [1, 2, 3, 4, 5, 6, 7];
const CardContainer = ({ title }) => {
  const [openCardContainer, setOpenCardConatiner] = React.useState(false);
    let selectedList;
  if(!openCardContainer){
     selectedList = list.slice(0,4);
  }
  else{
      selectedList = list;
  }

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
        <Grid item container spacing={2} style={{ backgroundColor: "#DCDCDC" }}>
          {
              selectedList.map((item,index) => {
                  return <Grid item xs={3}>
                  </Grid>
              })
          }
        </Grid>
      </Grid>
    </Container>
  );
};

export default React.memo(CardContainer);
