import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  text: {
    fontSize: "20px",
    fontWeight: 1000,
    color: "#000",
    marginTop: "-50px",
  },
  price: {
    fontSize: "14px",
    color: "#000",
    marginTop: "20px",
  },
  cardContent: {
    display: "flex",
    position: "relative",
    textAlign: "center",
    flexDirection: "column",
    paddingTop: 4,
  },
}));

export default function RecipeReviewCard() {
  const classNames = useStyles();

  return (
    <Card
      className="mx-2 transform transition duration-1000 ease-in-out hover:-translate-x-1 hover:shadow-lg hover:-translate-y-1 border max-h-72"
      style={{ maxWidth: 250 }}
    >
      <CardMedia
        className="h-60 opacity-90 hover:opacity-95"
        image="https://www.reliancedigital.in/medias/iPhone-11-64GB-Black-491901638-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMTEzOTR8aW1hZ2UvanBlZ3xpbWFnZXMvaDExL2gzOC85NDIxODk4OTQwNDQ2LmpwZ3w1YzllY2ZiZDg2NTZjNzgyMzM5NmE5NTkxMjk2Y2E1YWNkNTM5NWU4NGQxM2NiZTczNGI4ZGNkNzNmMTc0ODM4"
        title="Category"
      />
      <CardContent className={classNames.cardContent}>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={classNames.text}
        >
          MOBILE
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          className={classNames.price}
        >
          ₹20,900.00 - ₹94,900.00
        </Typography>
      </CardContent>
    </Card>
  );
}
