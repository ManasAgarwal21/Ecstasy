import React from "react";
import { Redirect, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import Sidebar from "../components/Sidebar";
import HomeContent from "../components/HomeContent";
import Footer from "../components/Footer";
import SearchedList from "../components/SearchedList";

export default function Home({ location }) {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const { search } = useLocation();
  const match = search.match(/search=(.*)/);
  const type = match?.[1];

  if (!location.state) {
    return <Redirect to="/login" />;
  }

  return (
    <React.Fragment>
      <Navbar setIsSidebarOpen={setIsSidebarOpen} />
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Categories />
      {!type && <HomeContent/>}
      {type === "search" && <SearchedList/>}
      <Footer />
    </React.Fragment>
  );
}
