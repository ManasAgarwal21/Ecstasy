import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Chip from "@material-ui/core/Chip";
import IconButton from "@material-ui/core/IconButton";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { makeStyles } from "@material-ui/core/styles";
import image from "./../../images/logo192.png";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "160px",
    height:"270px",
    margin: theme.spacing(1),
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "column",
    position: "relative",
    padding: "4px",
    paddingBottom: "0px",
    boxShadow: "1px 1px 8px rgba(0,0,0,0.2)",
  },
  img: {
    width: "120px",
    margin: "15px auto 5px auto",
    height: "120px",
  },
  icons: {
    padding: "4px",
    margin: "0px",
    position: "absolute",
    top: "0px",
    right: "0px",
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
  iconButton: {
    color: "rgb(50,50,50,0.5)",
    float: "right",
    padding: "6px",
  },
  icon: {
    fontSize: "15px",
  },
  fillIcon: {
    float: "right",
    padding: "6px",
    color: theme.palette.secondary.main,
  },
  title: {
    fontSize: "13px",
    color: "#000",
    margin:"4px 0px",
    overflow: "hidden",
    display: "-webkit-box",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical",
  },
  content: {
    height: "126px",
    padding: "8px !important",
  },
}));

const ProductCard = ({ props }) => {
  const classNames = useStyles();
  const [product, setProduct] = useState({
    name: "Product name",
    seller: "Ecstasy",
    image: image,
    rating: 2.5,
    onSale: false,
    isFavourite: false,
    price: 0.0,
    filter: ["all"],
  });

  useEffect(() => {
    if (props) setProduct({...product, name : props.title,
                    image: props.image,
                    rating: props.rating.rate,
                    price: props.price,
                    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);

  const handleFavClick = (event) => {
    event.preventDefault();
    setProduct({ ...product, isFavourite: !product.isFavourite });
  };

  return (
    <Card className={classNames.root}>
      <CardActions className={classNames.icons}>
        {product.onSale ? (
          <Chip
            variant="default"
            size="small"
            label="Sale"
            style={{
              backgroundColor: "red",
              // backgroundColor: "#34af89",
              opacity: "0.7",
              color: "white",
              borderRadius: "3px",
            }}
          />
        ) : (
          <div></div>
        )}
        <IconButton
          aria-label="add to favourites"
          onClick={handleFavClick}
          className={
            product.isFavourite ? classNames.fillIcon : classNames.iconButton
          }
        >
          <FavoriteIcon className={classNames.icon} />
        </IconButton>
      </CardActions>
      <img src={product.image} alt={product.name} className={classNames.img} />
      <CardContent className={classNames.content}>
        <Typography className={classNames.title}>{product.name}</Typography>
        <Rating
          size="small"
          name="half-rating-read"
          value={product.rating}
          precision={0.1}
          readOnly
        />
        <Typography
          variant="body2"
          style={{ color: "000", fontWeight: "500" }}
          component="p"
        >
          {`₹ ${product.price}`}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {`By ${product.seller}`}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
