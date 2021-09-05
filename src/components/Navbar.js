import React, { useState } from "react";
import {
  Grid,
  Typography,
  Button,
  IconButton,
  FormControl,
  Select,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid rgba(0,0,0,0.05)",
    "& > *": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      "& > *": {
        margin: "0px 8px",
      },
    },
  },
  rightSection: {
    display: "flex",
    justifyContent: "space-evenly",
    marginLeft: "10px",
    padding: "0px 5px",
    maxWidth: "300px",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "280px",
    },
  },
  leftSection: {
    display: "flex",
    justifyContent: "space-evenly",
    marginRight: "10px",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "90px",
    },
  },
  item: {
    fontSize: "11px",
    maxWidth: theme.spacing(14),
    minWidth: theme.spacing(8),
  },
  itemLanguage: {
    fontSize: "12px",
    width: theme.spacing(4.5),
    "& > *": {
      paddingRight: "0px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "10px",
    },
  },
  title: {
    fontWeight: 600,
    color: "rgb(50,200,140)",
    cursor: "default",
    margin: "0px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "15px",
    },
  },
  iconButton: {
    marginLeft: "0px",
    marginRight: "0px",
  },
  icon: {
    color: "black",
    fontSize: "24px",
    margin: "0px",
    padding: "0px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "20px",
    },
  },
  badge: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
      width: "20px !important",
      padding: "0px",
      height: "20px",
      borderRadius: "50%",
    },
  },
  button: {
    textTransform: "none",
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
    },
  },
  searchSection: {
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  searchSecondary: {
    display: "none",
    justifyContent: "center",
    borderBottom: "1px solid rgba(0,0,0,0.05)",
    alignItems: "center",
    paddingRight: "10px",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
    },
  },
}));

const Navbar = (props) => {
  const classNames = useStyles();
  const [address, setAddress] = useState("default");
  const [language, setLanguage] = useState("English");

  const handleAddressChange = (event) => {
    console.log(event.target);
    setAddress(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <React.Fragment>
      <div className={classNames.root}>
        <Grid className={classNames.leftSection}>
          <IconButton
            aria-label="drawer"
            className={classNames.iconButton}
            onClick={() => {
              props.setIsSidebarOpen((state) => !state);
            }}
          >
            <MenuIcon className={classNames.icon} />
          </IconButton>
          <Typography className={classNames.title}>ECSTASY</Typography>
        </Grid>
        <Grid xs={12} sm={4} className={classNames.searchSection}>
          <SearchBar />
          <FormControl>
            <Select
              onChange={handleAddressChange}
              value={address}
              className={classNames.item}
            >
              <MenuItem value={"default"}>
                Deliver to :<br />
              </MenuItem>
              <MenuItem value={"121001"}>
                Deliver to :<br /> Rupin, faridabad 121001
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid className={classNames.rightSection}>
          <FormControl>
            <Select
              onChange={handleLanguageChange}
              value={language}
              className={classNames.itemLanguage}
            >
              <MenuItem value={"English"}>EN</MenuItem>
              <MenuItem value={"Hindi"}>HI</MenuItem>
            </Select>
          </FormControl>
          <Button
            className={classNames.button}
            startIcon={<AssignmentTurnedInIcon className={classNames.icon} />}
          >
            {"Orders"}
          </Button>
          <Link to="/cart">
            <IconButton
              aria-label="cart"
              className={classNames.iconButton}
              color="inherit"
            >
              <Badge
                badgeContent={1}
                color="secondary"
                classes={{ badge: classNames.badge }}
              >
                <ShoppingCartIcon className={classNames.icon} />
              </Badge>
            </IconButton>
          </Link>
          <IconButton aria-label="profile" className={classNames.iconButton}>
            <AccountCircleIcon className={classNames.icon} />
          </IconButton>
        </Grid>
      </div>
      <Grid xs={12} className={classNames.searchSecondary}>
        <SearchBar />
        <FormControl>
          <Select
            onChange={handleAddressChange}
            value={address}
            className={classNames.item}
          >
            <MenuItem value={"default"}>
              Deliver to :<br />
            </MenuItem>
            <MenuItem value={"121001"}>
              Deliver to :<br /> Rupin, faridabad 121001
            </MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </React.Fragment>
  );
};

export default React.memo(Navbar);
