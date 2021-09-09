import React from "react";
import Banner from "../components/Banner";
import CardContainer from "../components/CardContainer/CardContainer";
import ImageList from "../components/CardContainer/ImageList";

const HomeContent = () => {
  return (
    <React.Fragment>
      <Banner />
      <CardContainer title="Recommended Products" />
      <CardContainer title="Trending Products" />
      <ImageList title="subcategories" />
      <CardContainer title="Discounts for you" />
      <CardContainer title="Shops near you" />
      <ImageList title="offers" />
      <CardContainer title="Recently Viewed" />
    </React.Fragment>
  );
};

export default HomeContent;
