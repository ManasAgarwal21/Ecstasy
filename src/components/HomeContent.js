import React from "react";
import Banner from "../components/Banner";
import CardContainer from "../components/CardContainer/CardContainer";
import ImageList from "./CardContainer/ImageListContainer";

const HomeContent = () => {
  return (
    <div
      style={{
        backgroundColor: "rgba(230,230,240,0.5",
        paddingBottom: "10px",
      }}
    >
      <Banner />
      <CardContainer
        title="Recommended Products"
        id={"Recommended Products"}
      />
      <CardContainer
        title="Trending Products"
        anchor="offer"
        id={"Trending Products"}
      />
      <ImageList
        title="subcategories"
        id={"subcategories"}
      />
      <CardContainer
        title="Discounts for you"
        id={"Discounts for you"}
      />
      <CardContainer
        title="Shops near you"
        id="Shops near you"
      />
      <ImageList
        title="offers"
        id="offers"
      />
      <CardContainer
        title="Recently Viewed"
        id="Recently Viewed"
      />
    </div>
  );
};

export default HomeContent;
