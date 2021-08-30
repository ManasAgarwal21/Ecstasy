import React from "react";
import { Redirect } from "react-router-dom";

const Home = ({ location }) => {
  if (!location.state) {
    return <Redirect to="/signin" />;
  }
  return (
    <div>This is Home Page</div>
  );
};

export default Home;
