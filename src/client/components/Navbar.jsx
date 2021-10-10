import React, { useState } from "react";
import {
  Grid,
  Typography,
  Button,
  IconButton,
  FormControl,
  Select,
  MenuItem,
  Badge,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import PopUp from "./PopUp";

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
    [theme.breakpoints.down("sm")]: {
      padding: "4px 0px",
    },
  },
  sticky: {
    position: "sticky",
    top: "0px",
    zIndex: "15",
    backgroundColor: "white",
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
    [theme.breakpoints.down("xs")]: {
      maxWidth: "250px",
    },
  },
  leftSection: {
    display: "flex",
    justifyContent: "space-evenly",
    marginRight: "10px !important",
    [theme.breakpoints.down("xs")]: {
      maxWidth: "90px",
    },
  },
  item: {
    fontSize: "11px !important",
    height: theme.spacing(4),
    margin: theme.spacing(1),
    maxWidth: theme.spacing(14),
    minWidth: theme.spacing(8),
  },
  title: {
    fontWeight: `600 !important`,
    color: "rgb(50,200,140)",
    fontSize: "20px !important",
    cursor: "default",
    margin: "0px !important",
    [theme.breakpoints.up("sm")]: {
      marginLeft: "20px !important",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "15px !important",
    },
  },
  iconButton: {
    marginLeft: "0px",
    marginRight: "0px",
  },
  menuButton: {
    marginLeft: "0px",
    marginRight: "0px",
    [theme.breakpoints.up("sm")]: {
      display: "none !important",
    },
  },
  icon: {
    color: "black !important",
    fontSize: "24px !important",
    margin: "0px",
    padding: "0px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px !important",
    },
  },
  badge: {
    backgroundColor: "red",
    color: "white",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px",
      width: "20px",
      padding: "0px",
      height: "20px",
      borderRadius: "50%",
    },
  },
  button: {
    textTransform: "none !important",
    color: "black !important",
    [theme.breakpoints.down("sm")]: {
      fontSize: "12px !important",
    },
  },
  searchSection: {
    [theme.breakpoints.down("sm")]: {
      display: "none !important",
    },
  },
  searchSecondary: {
    display: "none !important",
    justifyContent: "center",
    borderBottom: "1px solid rgba(0,0,0,0.05)",
    alignItems: "center",
    position: "relative",
    // padding: "10px",
    paddingLeft: "none",
    [theme.breakpoints.down("sm")]: {
      display: "flex !important",
    },
  },
}));

const Navbar = (props) => {
  const classNames = useStyles();
  const [address, setAddress] = useState("default");
  const [anchorEl, setAnchorEl] = useState(null);
  const [isDisable, setIsDisable] = useState(false);

  const handleAddressChange = (event) => {
    console.log(event.target);
    setAddress(event.target.value);
  };

  return (
    <div className={classNames.sticky}>
      <div className={classNames.root}>
        <Grid className={classNames.leftSection}>
          <IconButton
            aria-label="drawer"
            className={classNames.menuButton}
            onClick={() => props.setIsSidebarOpen((state) => !state)}
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
              variant="standard"
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
                classes={{ badge: classNames.badge }}
              >
                <ShoppingCartIcon className={classNames.icon} />
              </Badge>
            </IconButton>
          </Link>
          <IconButton
            aria-label="profile"
            className={classNames.iconButton}
            onClick={(event) => {
              if (!isDisable) {
                setAnchorEl(event.currentTarget);
                setIsDisable(true);
              }
            }}
          >
            <PopUp
              setAnchorEl={setAnchorEl}
              anchorEl={anchorEl}
              setIsDisable={setIsDisable}
            />
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
            variant="standard"
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
    </div>
  );
};

export default React.memo(Navbar);
