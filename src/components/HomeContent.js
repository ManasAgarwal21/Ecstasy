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
        selectedList={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]}
        id={"Recommended Products"}
      />
      <CardContainer
        title="Trending Products"
        anchor="offer"
        id={"Trending Products"}
        selectedList={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]}
      />
      <ImageList
        title="subcategories"
        id={"subcategories"}
        selectedList={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]}
      />
      <CardContainer
        title="Discounts for you"
        id={"Discounts for you"}
        selectedList={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]}
      />
      <CardContainer
        title="Shops near you"
        id="Shops near you"
        selectedList={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]}
      />
      <ImageList
        title="offers"
        id="offers"
        selectedList={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]}
      />
      <CardContainer
        title="Recently Viewed"
        id="Recently Viewed"
        selectedList={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]}
      />
    </div>
  );
};

export default HomeContent;
