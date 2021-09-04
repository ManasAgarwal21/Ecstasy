import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import CardDemo from "./CardDemo";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const selectedList = [1, 2, 3, 4, 5, 6];

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "grey",
    overflow: "hidden",
    position: "relative",
    display:"flex",
  },
  imageList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
    overflow: "auto",
  },
}));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const itemData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function SingleLineImageList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <button className="absolute z-10 left-0 px-6 py-16 bg-white border top-28" onClick={() => document.getElementById('imageList').scrollRight += 20}>
        <ArrowBackIcon fontSize="small" />
      </button>
      <ImageList className={classes.imageList} cols={4} id="imageList">
        {selectedList.map((item, index) => (
          <ImageListItem
            key={index}
            style={{
              marginLeft: 5,
              height: "auto",
              marginTop: 10,
              marginBottom: 10,
              marginRight: 5,
            }}
          >
            <CardDemo />
          </ImageListItem>
        ))}
      </ImageList>
      <button className="absolute z-10 right-0 px-6 py-16 bg-white border top-28" onClick={() => document.getElementById('imageList').scrollLeft += 20}>
        <ArrowForwardIcon fontSize="small" />
      </button>
    </div>
  );
}
