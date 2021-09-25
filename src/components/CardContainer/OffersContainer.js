import React from "react";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import { makeStyles } from "@material-ui/core/styles";
import OfferCard from "../Cards/OfferCard";
import CategoryCard from "../Cards/CategoryCard";
import image from "../../assets/default.jpg";
import {useSelector} from "react-redux";
import {getProducts} from "../../redux/selectors/user.selectors";

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

  const { productReducer } = useSelector(getProducts);
  const [categories, setCategories] = React.useState([]);
  const offers = [
    "https://rukminim1.flixcart.com/flap/464/708/image/82d4e75d7f318627.jpg?q=70",
    "https://www.offeraty.com/sites/default/files/offers/magrabi-optical-special-offer-offer-19697.jpg",
    "https://cdn1.vectorstock.com/i/1000x1000/93/10/sale-voucher-discount-and-offers-banner-design-vector-14299310.jpg",
    "https://images.freekaamaal.com/post_images/1610602042.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmA58KS09sDt2NdrzGiOMTkDhVifFCDr1V_w&usqp=CAU",
    "https://cdn.grabon.in/gograbon/images/web-images/uploads/1618571140235/mobile-offers.jpg",
  ];

  React.useEffect(() =>{ 
    if(productReducer.length > 0){
    setCategories([
    {
      category: "Electronics",
      image: productReducer[8].image || image,
      price: 5499,
      desc: "Sandisk, Sony, Samsung and more..",
    },
    {
      category: "Jewellery",
      image: productReducer[4].image || image,
      price: 12000,
      desc: "Diamond set, pendant, gold ring,..",
    },
    {
      category: "Hard disks",
      image: productReducer[11].image || image,
      price: 1199,
      desc: "WD, samsung, Sandisk, Kingston, ..",
    },
    {
      category: "LEDs",
      image: productReducer[13].image || image,
      price: 22000,
      desc: "Sony, Samsung, MI, ..",
    },
    {
      category: "Men's wear",
      image: productReducer[1].image || image,
      price: 999,
      desc: "T-shirts, shirts, jeans,..",
    },
    {
      category: "Women's wear",
      image: productReducer[19].image || image,
      price: 1500,
      desc: "T-shirts, Suits, lehengas, sarees,..",
    },
    {
      category: "Purse",
      image: productReducer[0].image || image,
      price: 200,
      desc: "Hand purse, and more..",
    },
  ])
}
}, [productReducer]);

  return (
    <div className={classes.root}>
      <ImageList className={classes.list} cols={"auto"}>
        {type === "categories"
          ? categories.map((item, index) => (
              <ImageListItem
                key={index}
                style={{
                  height: "auto",
                  margin: "5px 0px",
                }}
              >
                <CategoryCard props={item} />
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
