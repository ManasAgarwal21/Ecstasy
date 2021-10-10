import React from "react";
import { useDispatch } from "react-redux";
import getProducts from "../api/products";
import { updateProduct } from "../redux/actions/user.actions";
import Banner from "./Banner";
import CardContainer from "./CardContainer/CardContainer";
import OffersContainer from "./CardContainer/OffersContainer";

const HomeContent = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    const store = async () => {
      dispatch(updateProduct(await getProducts()));
    };
    store();
  }, [dispatch]);

  return (
    <div
      style={{
        backgroundColor: "rgba(230,230,240,0.5",
        paddingBottom: "10px",
      }}
    >
      <Banner />
      <CardContainer title="Recommended Products" 
        id={"Recommended Products"}
        start={1}
        end={12} />
      <CardContainer
        title="Trending Products"
        anchor="offer"
        id="Trending Products"
        start={14}
        end={20}
      />
      <OffersContainer type="categories" />
      <CardContainer title="Discounts for you" 
        id={"Discounts for you"}
        start={9}
        end={17} />
      <CardContainer title="Shops near you" 
        id="Shops near you"
        start={1}
        end={10} />
      <OffersContainer type="offers" />
      <CardContainer title="Recently Viewed" 
      id="Recently Viewed"
      start={10}
      end={17} />
    </div>
  );
};

export default HomeContent;
