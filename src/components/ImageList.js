import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ProductCard from "./ProductCard";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import "../styles/App.css";

const selectedList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 11, 1, 1];

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "hidden",
    position: "relative",
    display: "flex",
  },
  imageList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
    overflow: "auto",
    scrollBehavior: "smooth",
  },
}));
export default function SingleLineImageList() {
  const classes = useStyles();

  const [leftVar, setLeftVar] = React.useState(0);
  const [maxLeft, setMaxLeft] = React.useState();

  return (
    <div className={classes.root}>
      <button
        className={`z-10 left-0 px-6 py-16 bg-gray-100 border top-28 ${
          leftVar === 0 ? "hidden" : "absolute"
        }`}
        onClick={() => {
          document.getElementById("imageList").scrollLeft -= 160;
          setLeftVar(document.getElementById("imageList").scrollLeft);
        }}
      >
        <ArrowBackIcon fontSize="small" />
      </button>
      <ImageList className={classes.imageList} cols={6} id="imageList" gap={1}>
        {selectedList.map((item, index) => (
          <ImageListItem
            key={index}
            style={{
              height: "auto",
              marginTop: 5,
              marginBottom: 5,
            }}
          >
            <ProductCard
              props={{
                name: "product name",
                price: `${item}`,
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
      <button
        className={`z-10 right-0 px-6 py-16 bg-gray-100 border top-28 ${
          maxLeft === leftVar ? "hidden" : "absolute"
        }`}
        onClick={() => {
          document.getElementById("imageList").scrollLeft += 160;
          setLeftVar(document.getElementById("imageList").scrollLeft);
          setMaxLeft(
            document.getElementById("imageList").scrollWidth -
              document.getElementById("imageList").clientWidth
          );
        }}
      >
        <ArrowForwardIcon fontSize="small" />
      </button>
    </div>
  );
}
