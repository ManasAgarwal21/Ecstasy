import React from "react";
import Banner from "../components/Banner";
import CardContainer from "../components/CardContainer/CardContainer";
import ImageList from "../components/CardContainer/ImageList";

const HomeContent = () => {
  return (
    <div
      style={{
        backgroundColor: "rgba(230,230,240,0.5",
        paddingBottom: "10px",
      }}
    >
      <Banner />
      <CardContainer title="Recommended Products" />
      <CardContainer title="Trending Products" anchor="offer" />
      <ImageList title="subcategories" />
      <CardContainer title="Discounts for you" />
      <CardContainer title="Shops near you" />
      <ImageList title="offers" />
      <CardContainer title="Recently Viewed" />
    </div>
  );
};

export default HomeContent;
