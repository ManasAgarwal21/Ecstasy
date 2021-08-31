import React from "react";
import { Redirect } from "react-router-dom";
import Navbar from "../components/Navbar";
import Categories from '../components/Categories';

const Home = ({ location }) => {
  if (!location.state) {
    return <Redirect to="/login" />;
  }
  return (
    <React.Fragment>
      <Navbar/>
      <Categories/>
    </React.Fragment>
  );
};

export default Home;
