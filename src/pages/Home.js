import React from "react";
import { Redirect } from "react-router-dom";
import Navbar from "../components/Navbar";
import Categories from '../components/Categories';
import CardComp from '../components/CardComp';

export default function Home({ location }){
  if (!location.state) {
    return <Redirect to="/login" />;
  }

  return (
    <React.Fragment>
      <Navbar/>
      <Categories/>
      <CardComp title="Trending Products"/>
    </React.Fragment>
  );
};
