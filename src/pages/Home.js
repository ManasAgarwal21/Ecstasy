import React from "react";
import { Redirect } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchBar from '../components/SearchBar';

const Home = ({ location }) => {
  if (!location.state) {
    return <Redirect to="/login" />;
  }
  return (
    <>
    <div className="flex justify-between items-center border mx-0 my-0 px-4">
      <div className="flex items-center">
        <MenuIcon style={{fontSize:"30"}}/>
        <span className="font-bold text-green-600 text-xl mx-2">BLISSMART</span>
      </div>
      <SearchBar />
      <div className="flex items-center">
        <ShoppingCartIcon style={{fontSize:"30"}} className="mx-2"/>
        <AccountCircleIcon style={{fontSize:"30"}}/>
      </div>
    </div>
    </>
  );
};

export default Home;
