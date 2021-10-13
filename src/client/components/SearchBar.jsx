import React, { useState } from "react";
import { Paper, IconButton, InputBase, Divider } from "@mui/material";
import {
  FilterListRounded,
  Search,
  PinDropRounded,
  PinDropOutlined,
} from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { Redirect } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0px 4px",
    margin: "6px 10px !important",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    maxWidth: "450px",
    boxShadow: "0px 1px 3px rgba(0,0,0,0.3)",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0px",
      fontSize: "14px",
    },
  },
  colouredIconButton: {
    color: `${theme.palette.primary.main} !important`,
    padding: 6,
  },
  icon: {
    fontSize: "22px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
    },
  },
  iconButton: {
    padding: 6,
  },
  divider: {
    height: 24,
    margin: 4,
    [theme.breakpoints.down("sm")]: {
      margin: 1,
    },
  },
}));

export default function SearchBar() {
  // const [searchedData, setSearchedData] = useState([{
  //     name: '',
  //     price: '',
  //     description: '',
  //     rating: 0,
  //     image: '',
  //     favourite: false
  // }]);
  const [searchTerm, setSearchTerm] = useState({
    term: "",
    search: false,
    filters: {
      price: "",
      brand: "",
      rating: "",
      category: "",
    },
    location: {
      lat: 0,
      long: 0,
    },
  });
  const [flags, setFlags] = useState({
    fillfilter: false,
    fillGps: false,
  });
  const classNames = useStyles();

  const handleIconClick = (flag) => {
    setFlags({ ...flags, [flag]: !flags[flag] });
  };
  const handleChange = (event) => {
    setSearchTerm({ ...searchTerm, term: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchTerm({ ...searchTerm, search: true });
  };

  return (
    <React.Fragment>
      {searchTerm.search && (
        <Redirect
          to={{
            pathname: "/home",
            search: `search=${searchTerm.term}`,
          }}
        />
      )}
      <Paper
        onSubmit={handleSubmit}
        component="form"
        className={classNames.root}
      >
        <IconButton
          className={classNames.colouredIconButton}
          aria-label="search"
        >
          <Search className={classNames.icon} />
        </IconButton>
        <InputBase
          className={classNames.input}
          placeholder="Search Products"
          onChange={handleChange}
          value={searchTerm.term}
          inputProps={{ "aria-label": "search products" }}
        />
        <IconButton
          className={
            flags.fillFilter
              ? classNames.colouredIconButton
              : classNames.iconButton
          }
          aria-label="filter"
          onClick={() => handleIconClick("fillFilter")}
        >
          <FilterListRounded className={classNames.icon} />
        </IconButton>
        <Divider className={classNames.divider} orientation="vertical" />
        <IconButton
          className={
            flags.fillGps
              ? classNames.colouredIconButton
              : classNames.iconButton
          }
          aria-label="location search"
          onClick={() => handleIconClick("fillGps")}
        >
          {flags.fillGps ? (
            <PinDropRounded className={classNames.icon} />
          ) : (
            <PinDropOutlined className={classNames.icon} />
          )}
        </IconButton>
      </Paper>
    </React.Fragment>
  );
}
