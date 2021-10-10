import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import image from "./../../assets/default.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "160px",
    height: "270px",
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
    width: "140px",
    margin: "15px auto 5px auto",
    height: "140px",
  },
  title: {
    fontSize: "13px",
    color: "#000",
    margin: "4px 0px",
    overflow: "hidden",
    display: "-webkit-box",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical",
  },
  content: {
    height: "135px",
    alignItems: "center",
    padding: "8px !important",
    display: "flex",
    flexDirection: "column",
    "& > *":{
      margin: "3px 0px",
      textAlign: "center",
    }
  },
}));

const ProductCard = ({ props }) => {
  const classNames = useStyles();
  const [product, setProduct] = useState({
    category: "Category",
    image: image,
    onSale: false,
    price: 0.0,
    desc: "product1, product2",
    filter: ["all"],
  });

  useEffect(() => {
    if (props)
      setProduct({
        ...product,
        category: props.category,
        image: props.image || image,
        price: props.price,
        desc: props.desc,
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props]);

  return (
    <Card className={classNames.root}>
      <img src={product.image} alt={product.category} className={classNames.img} />
      <CardContent className={classNames.content}>
        <Typography className={classNames.title}>{product.category}</Typography>
        <Typography
          variant="body2"
          style={{ color: "000", fontWeight: "500" }}
          component="p"
        >
          {`from ₹ ${product.price}`}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {`${product.desc}`}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
