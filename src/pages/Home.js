import React from "react";
import { Redirect } from "react-router-dom";
import Navbar from "../components/Navbar";
import Categories from '../components/Categories';
import Footer from '../components/Footer';

export default function Home({ location }){
  if (!location.state) {
    return <Redirect to="/login" />;
  }
  return (
    <React.Fragment>
      <Navbar/>
      <Categories/>
      <Footer />
    </React.Fragment>
  );
};
