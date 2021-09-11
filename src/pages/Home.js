import React from "react";
import { Redirect } from "react-router-dom";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import Sidebar from "../components/Sidebar";
import HomeContent from "../components/HomeContent";
import Footer from "../components/Footer";

export default function Home({ location }) {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

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
      <HomeContent />
      <Footer />
    </React.Fragment>
  );
}
