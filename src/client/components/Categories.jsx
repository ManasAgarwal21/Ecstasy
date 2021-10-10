import React from "react";
import { Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 16px",
    display: "block",
    overflow: "scroll",
    boxShadow: "0px 2px 8px -5px rgba(0,0,0,0.5)",
    "&::-webkit-scrollbar": {
      display: "none",
    },
    [theme.breakpoints.down("xs")]: {
      padding: "2px 8px",
    },
  },
  list: {
    display: "inline-flex",
  },
  button: {
    margin: `${theme.spacing(1)} !important`,
    backgroundColor: "rgba(0,0,0,0) !important",
    color: "rgb(0, 0, 0) !important",
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
      paddingLeft: "2px",
      paddingRight: "2px",
    },
  },
  buttonColoured: {
    margin: `${theme.spacing(1)} !important`,
    backgroundColor: "rgb(65, 105, 223) !important",
    color: "#ffffff !important",
    "&:hover": {
      margin: theme.spacing(1),
      backgroundColor: "rgb(65, 105, 223) !important",
      color: "#ffffff",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
      paddingLeft: "2px",
      paddingRight: "2px",
    },
  },
}));

const listItems = [
  "All",
  "Men",
  "Women",
  "Health",
  "Mobiles",
  "Grocery",
  "Jewellery",
  "Kids",
  "Electronics",
  "Furniture",
  "Shoes",
  "Books",
];

export default function Categories() {
  const classNames = useStyles();

  const handleClick = (event) => {
    const target =
      event.target.tagName === "BUTTON"
        ? event.target
        : event.target.offsetParent;
    switch (target.classList.contains(classNames.button)) {
      case true:
        target.classList.add(classNames.buttonColoured);
        target.classList.remove(classNames.button);
        break;
      case false:
        target.classList.add(classNames.button);
        target.classList.remove(classNames.buttonColoured);
        break;
      default:
        return;
    }
  };

  return (
    <div className={classNames.root}>
      <ul className={classNames.list}>
        {listItems.map((item) => {
          return (
            <Button
              key={item}
              variant="contained"
              className={classNames.button}
              onClick={handleClick}
            >
              {item}
            </Button>
          );
        })}
      </ul>
    </div>
  );
}
