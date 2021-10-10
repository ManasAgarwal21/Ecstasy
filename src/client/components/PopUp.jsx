import React from "react";
import { withStyles } from "@mui/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import SettingsIcon from "@mui/icons-material/Settings";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
    minWidth: "200px",
  },
}))(MenuItem);

const PopUp = ({ setAnchorEl, anchorEl, setIsDisable }) => {
  return (
    <div>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={() => {
          setAnchorEl(null);
          setIsDisable(false);
        }}
      >
        <div className="flex flex-col items-center w-full">
          <AccountCircleIcon fontSize="large" />
          <ListItemText primary="Manas Agarwal" />
          <span
            className="-mt-2 text-gray-600"
            style={{ fontSize: "13px", marginBottom: "5px" }}
          >
            Customer
          </span>
        </div>
        <Divider style={{ backgroundColor: "royalblue" }} />
        <StyledMenuItem>
          <ListItemIcon>
            <ShoppingCartIcon fontSize="medium" />
          </ListItemIcon>
          <ListItemText primary="Orders" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <AccountBoxIcon fontSize="medium" />
          </ListItemIcon>
          <ListItemText primary="Account" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <SettingsIcon fontSize="medium" />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <ExitToAppIcon fontSize="medium" />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
};

export default React.memo(PopUp);
