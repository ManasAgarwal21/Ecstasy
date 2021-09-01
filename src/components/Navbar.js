import React, { useState } from "react";
import { Divider, Typography, Button, IconButton, FormControl, Select, MenuItem } from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu";
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SearchBar from "./SearchBar";
import { makeStyles } from "@material-ui/core/styles";
import  Badge  from '@material-ui/core/Badge';
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles(theme => ({
  root:{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid rgba(0,0,0,0.05)',
    '& > *': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      '& > *': {
        margin: '0px 8px',
      }
    }
  },
  item: {
    fontSize: '11px',
    width: theme.spacing(14),
  },
  itemLanguage: {
    fontSize: '12px',
    width: theme.spacing(4.5),
  },
  title: {
    fontWeight: 600,
    color: 'rgb(50,200,140)',
    cursor: 'default',
  },
  icon: {
    color : "black",
    fontSize: '24px',
    padding: '0px'
  },
  divider: {
    height: theme.spacing(3),
    margin: '0px 4px'
  }
}))

const Navbar = () => {

  const classNames = useStyles();
  const [address, setAddress] = useState('default');
  const [language, setLanguage] = useState('English');

  const handleAddressChange = event => {
    console.log(event.target);
    setAddress(event.target.value);
  }

  const handleLanguageChange = event => {
    setLanguage(event.target.value);
  }

  return (
    <React.Fragment>
      <div className={classNames.root}>
        <div>
          <IconButton aria-label="search">
              <MenuIcon className={classNames.icon}/>
          </IconButton>
          <Typography className={classNames.title} variant="h6">ECSTASY</Typography>
        </div>
        <div>
        <SearchBar/>
        <FormControl>
          <Select
            onChange={handleAddressChange}
            value={address}
            className={classNames.item}
            >
            <MenuItem value={'default'}>Deliver to :<br/></MenuItem>
            <MenuItem value={'121001'}>Deliver to :<br/> Rupin, faridabad 121001</MenuItem>
          </Select>
        </FormControl>
        </div>
        <div>
          <FormControl>
            <Select
              onChange={handleLanguageChange}
              value={language}
              className={classNames.itemLanguage}
              >
              <MenuItem value={'English'}>EN</MenuItem>
              <MenuItem value={'Hindi'}>HI</MenuItem>
            </Select>
          </FormControl>
          <Button
            style={{textTransform: 'none'}}
            startIcon={<AssignmentTurnedInIcon className={classNames.icon}/>}
          >
            {"Orders"}
          </Button>
          <Divider className={classNames.divider} orientation="vertical" />
          <IconButton aria-label="cart" color="inherit">
            <Badge badgeContent={1} color="secondary">
              <ShoppingCartIcon/>
            </Badge>
          </IconButton>
          <Divider className={classNames.divider} orientation="vertical" />
          <IconButton aria-label="profile">
            <AccountCircleIcon className={classNames.icon}/>
          </IconButton>
          </div>
      </div>
    </React.Fragment>
  );
};

export default React.memo(Navbar);
