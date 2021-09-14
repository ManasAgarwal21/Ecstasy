import React from "react";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import { makeStyles } from "@material-ui/core/styles";
import OfferCard from "../Cards/OfferCard";
import CategoryCard from "../Cards/CategoryCard";

const useStyles = makeStyles((theme) => ({
  root: {
    overflow: "hidden",
    margin: "0px 20px",
    width: "calc(100% - 40px)",
    padding: "10px",
    backgroundColor: "white",
    borderRadius: "4px",
    boxShadow: "0px 1px 8px rgba(0,0,0,0.2)",
  },
  list: {
    flexWrap: "nowrap",
    overflow: "scroll",
    scrollBehavior: "smooth",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
}));

const OffersContainer = ({ type }) => {
  const classes = useStyles();

  const offers = [
    "https://rukminim1.flixcart.com/flap/464/708/image/82d4e75d7f318627.jpg?q=70",
    "https://www.offeraty.com/sites/default/files/offers/magrabi-optical-special-offer-offer-19697.jpg",
    "https://cdn1.vectorstock.com/i/1000x1000/93/10/sale-voucher-discount-and-offers-banner-design-vector-14299310.jpg",
    "https://images.freekaamaal.com/post_images/1610602042.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmA58KS09sDt2NdrzGiOMTkDhVifFCDr1V_w&usqp=CAU",
  ];

  return (
    <div className={classes.root}>
    <ImageList className={classes.list} cols={"auto"}>
      {type === "categories"
        ? offers.map((item, index) => (
            <ImageListItem
              key={index}
              style={{
                height: "auto",
                margin: "5px 0px",
              }}
            >
              <CategoryCard image={item} />
            </ImageListItem>
          ))
        : offers.map((item, index) => (
            <ImageListItem
              key={index}
              style={{
                height: "auto",
                margin: "5px 0px",
              }}
            >
              <OfferCard image={item} />
            </ImageListItem>
          ))}
    </ImageList>
    </div>
  );
};

export default OffersContainer;
