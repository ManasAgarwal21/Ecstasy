import React from "react";
import { Paper, Typography, Grid, IconButton } from "@material-ui/core";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import { useSelector } from "react-redux";
import { getProducts } from "../../redux/selectors/user.selectors";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ProductCard from "../Cards/ProductCard";
import { makeStyles } from "@material-ui/core/styles";
import OfferCard from "./../Cards/OfferCard";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import "../../styles/App.css";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    boxShadow: "none",
    margin: "20px",
    backgroundColor: "transparent",
    justifyContent: "space-between",
  },
  list: {
    maxWidth: "calc(100% - 20vw)",
    padding: "0px 20px",
    backgroundColor: "white",
    borderRadius: "4px",
    boxShadow: "0px 1px 8px rgba(0,0,0,0.2)",
    [theme.breakpoints.down("sm")]: {
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
  root: {
    overflow: "hidden",
    position: "relative",
    display: "flex",
  },
  imageList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
    overflow: "scroll",
    scrollBehavior: "smooth",
  },
  imageListExpanded: {
    flexWrap: "wrap",
  },
}));

const CardContainer = ({ title, anchor, id, start, end }) => {
  const classNames = useStyles();
  const { productReducer } = useSelector(getProducts);
  const [openCardContainer, setOpenCardConatiner] = React.useState(false);
  const [hasOffer, setHasOffer] = React.useState(false);
  const [products, setProducts] = React.useState([]);
  const [leftVar, setLeftVar] = React.useState(0);
  const [maxLeft, setMaxLeft] = React.useState(undefined);

  React.useEffect(() => {
    if (anchor) setHasOffer(true);
  }, [anchor]);

  React.useEffect(() => {
    const products = productReducer.slice(start - 1, end);
    setProducts(products);
  }, [productReducer, end, start]);

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
        <div className={classNames.root}>
          <button
            className={`z-10 left-0 bg-gray-100 border top-36 px-6 py-6 rounded-full ${
              leftVar <= 0 || openCardContainer ? "hidden" : "absolute"
            }`}
            onClick={() => {
              document.getElementById(id).scrollLeft -= 360;
              setLeftVar((state) => state - 360);
            }}
          >
            <ArrowBackIcon fontSize="small" />
          </button>

          <ImageList
            className={
              (openCardContainer
                ? classNames.imageListExpanded
                : classNames.imageList) + " imageList"
            }
            cols={"auto"}
            id={id}
          >
            {products.map((item, index) => (
              <ImageListItem
                key={index}
                style={{
                  height: "auto",
                  margin: "5px 0px",
                }}
              >
                <ProductCard props={item} />
              </ImageListItem>
            ))}
          </ImageList>
          <button
            className={`z-10 right-0 bg-gray-100 border top-36 px-6 py-6 rounded-full ${
              leftVar >= maxLeft || openCardContainer ? "hidden" : "absolute"
            }`}
            onClick={() => {
              document.getElementById(id).scrollLeft += 360;
              setLeftVar((state) => state + 360);
              setMaxLeft(
                document.getElementById(id).scrollWidth -
                  document.getElementById(id).clientWidth
              );
            }}
          >
            <ArrowForwardIcon fontSize="small" />
          </button>
        </div>
      </Grid>
      {anchor && <OfferCard parent="container" />}
    </Paper>
  );
};

export default React.memo(CardContainer);
