import React from "react";
import { IconButton } from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchBar from "./SearchBar";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const Navbar = () => {

  return (
    <>
      <div className="flex justify-between items-center border mx-0 my-0 px-4">
        <div className="flex items-center">
          <IconButton aria-label="search">
              <MenuIcon style={{fontSize:"30", color: 'black'}}/>
          </IconButton>
          <span className="font-bold text-green-600 text-xl mx-2">ECSTASY</span>
        </div>
        <SearchBar />
        <div className="flex items-center">
          <IconButton className="mx-3" aria-label="search">
              <ShoppingCartIcon style={{fontSize:"30", color: 'black'}}/>
          </IconButton>
          <IconButton className="mx-3" aria-label="search">
              <AccountCircleIcon style={{fontSize:"30", color: 'black'}}/>
          </IconButton>
        </div>
      </div> 
    </>
  );
};

export default React.memo(Navbar);
