import React from "react";
import { Redirect } from "react-router-dom";
import Navbar from "../components/Navbar";
import Categories from "../components/Categories";
import CardContainer from "../components/CardContainer/CardContainer";
import Sidebar from "../components/Sidebar";
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
      <CardContainer title="Trending Products" />
      <Footer />
    </React.Fragment>
  );
}
