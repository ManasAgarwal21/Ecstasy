import React from "react";
import MenuIcon from "@material-ui/core/Icon";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchBar from "./SearchBar";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const Navbar = (props) => {
  return (
    <>
      <div className="border border-black">
        <div>
          <MenuIcon className="" />
          <span>BLISSMART</span>
        </div>
        <SearchBar />
        <div>
          <ShoppingCartIcon />
          <AccountCircleIcon />
        </div>
      </div>
    </>
  );
};

export default React.memo(Navbar);
