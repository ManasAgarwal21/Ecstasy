import React, { useState } from "react";
import { Redirect, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import Sidebar from "../components/Sidebar";
import HomeContent from "../components/HomeContent";
import Footer from "../components/Footer";
import SearchedList from "../components/SearchedList";
import { isAuthenticated } from "./../../server/controller/auth-helper";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const { search } = useLocation();
  const match = search.match(/search=(.*)/);
  const term = match?.[1];

  return (
    <React.Fragment>
      {isAuthenticated() ? (
        <React.Fragment>
          <Navbar setIsSidebarOpen={setIsSidebarOpen} />
          <Sidebar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
          <Categories />
          {term ? <SearchedList searchTerm={term} /> : <HomeContent />}
          <Footer />
        </React.Fragment>
      ) : (
        <Redirect to="/login" />
      )}
    </React.Fragment>
  );
}
