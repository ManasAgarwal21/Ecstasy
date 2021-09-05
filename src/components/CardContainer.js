import React from "react";
import { Container, Typography, Grid, IconButton } from "@material-ui/core";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import ProductCard from "./ProductCard";
import ImageList from './ImageList';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    padding: '20px',
  },
  head: {
    alignItems:"center",
    justifyContent:"space-between",
    padding: '0px 15px',
  }
}))

const selectedList = [1, 2, 3, 4, 5, 6, 7];

const CardContainer = ({ title }) => {
  const classNames = useStyles();
  const [openCardContainer, setOpenCardConatiner] = React.useState(false);

  return (
    <Container disableGutters>
      <Grid container spacing={0} className={classNames.container}>
        <Grid item container className={classNames.head}>
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
                  <ProductCard props={{
                    name: 'product name',
                    price:`${item}`
                  }}/>
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

export default React.memo(CardContainer);
