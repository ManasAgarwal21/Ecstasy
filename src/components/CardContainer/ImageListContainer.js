import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ProductCard from "../Cards/ProductCard";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import "../../styles/App.css";


const useStyles = makeStyles((theme) => ({
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
}));
const ImageListContainer = ({selectedList,id}) => {
  const classes = useStyles();

  const [leftVar, setLeftVar] = React.useState(0);
  const [maxLeft, setMaxLeft] = React.useState();

  return (
    <div className={classes.root}>
      <button
        className={`z-10 left-0 bg-gray-100 border top-36 px-6 py-6 rounded-full ${
          leftVar === 0 ? "hidden" : "absolute"
        }`}
        onClick={() => {
          document.getElementById(id).scrollLeft -= 360;
          setLeftVar(document.getElementById(id).scrollLeft);
        }}
      >
        <ArrowBackIcon fontSize="small" />
      </button>
      <ImageList className={classes.imageList + " imageList"} cols={"auto"} id={id}>
        {selectedList && selectedList.map((item, index) => (
          <ImageListItem
            key={index}
            style={{
              height: "auto",
              margin: "5px 0px",
            }}
          >
            <ProductCard
              props={{
                name: "Product name",
                price: `${item}`,
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
      <button
        className={`z-10 right-0 bg-gray-100 border top-36 px-6 py-6 rounded-full ${
          maxLeft === leftVar ? "hidden" : "absolute"
        }`}
        onClick={() => {
          document.getElementById(id).scrollLeft += 360;
          setLeftVar(document.getElementById(id).scrollLeft);
          setMaxLeft(
            document.getElementById(id).scrollWidth -
              document.getElementById(id).clientWidth
          );
        }}
      >
        <ArrowForwardIcon fontSize="small" />
      </button>
    </div>
  );
}

export default React.memo(ImageListContainer);