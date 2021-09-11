import React from "react";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import {makeStyles} from "@material-ui/core/styles";
import OfferCard from "../Cards/OfferCard";
import CategoryCard from "../Cards/CategoryCard";

const useStyles = makeStyles((theme) => ({
    root: {
      overflow: "hidden",
      display: "flex",
      flexWrap: "nowrap",
      justifyContent: "space-evenly",
    },
  }));

const OffersContainer = ({type}) => {
    const classes = useStyles();

    const offers = [
        "https://rukminim1.flixcart.com/flap/464/708/image/82d4e75d7f318627.jpg?q=70",
        "https://cdn.grabon.in/gograbon/images/web-images/uploads/1618571140235/mobile-offers.jpg",
        "https://cdn1.vectorstock.com/i/1000x1000/93/10/sale-voucher-discount-and-offers-banner-design-vector-14299310.jpg",
        "https://images.freekaamaal.com/post_images/1610602042.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmA58KS09sDt2NdrzGiOMTkDhVifFCDr1V_w&usqp=CAU"
    ];
    
    return(
        <div>
            <ImageList
        className={classes.root}
        cols={"auto"}
      >
          {(type === "categories") ? 
        offers.map((item, index) => (
          <ImageListItem
            key={index}
            style={{
              height: "auto",
              margin: "5px 0px",
            }}
          >
            <CategoryCard image={item} />
          </ImageListItem>
        )) :
        offers.map((item, index) => (
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
    )
}

export default OffersContainer;