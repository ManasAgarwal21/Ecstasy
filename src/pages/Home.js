import React from "react";
import { Redirect } from "react-router-dom";
import Navbar from "../components/Navbar";
import Categories from '../components/Categories';
import CardContainer from '../components/CardContainer';
import Footer from '../components/Footer';

export default function Home({ location }){
  if (!location.state) {
    return <Redirect to="/login" />;
  }

  return (
    <React.Fragment>
      <Navbar/>
      <Categories/>
      <CardContainer title="Trending Products"/>
      <CardContainer title="Near By Stores"/>
      <CardContainer title="Recent Searches"/>
      <Footer/>
    </React.Fragment>
  );
};
