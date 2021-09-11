import React from "react";
import Banner from "../components/Banner";
import CardContainer from "../components/CardContainer/CardContainer";
import ImageList from "./CardContainer/ImageListContainer";
import OffersContainer from "./CardContainer/OffersContainer";

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
      <OffersContainer type="categories"/>
      <CardContainer
        title="Discounts for you"
        id={"Discounts for you"}
      />
      <CardContainer
        title="Shops near you"
        id="Shops near you"
      />
      <OffersContainer type="offers"/>
      <CardContainer
        title="Recently Viewed"
        id="Recently Viewed"
      />
    </div>
  );
};

export default HomeContent;
