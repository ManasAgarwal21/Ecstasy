import React from "react";
import { makeStyles } from "@mui/styles";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ListSubheader from "@mui/material/ListSubheader";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const useStyles = makeStyles({
  list: {
    width: 250,
    padding: "0px",
  },
  fullList: {
    width: "auto",
  },
  root: {
    width: "100%",
    maxWidth: 360,
  },
  listDetails: {
    padding: "0px",
    width: "100%",
  },
  accordianDetails: {
    padding: "0px",
  },
  typographyText: {
    fontWeight: 800,
    color: "white",
    padding: "4px 0px",
  },
});

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const classes = useStyles();
  const [isAccordianOpen, setIsAccordianOpen] = React.useState(false);

  const list = () => (
    <div className={classes.list} role="presentation">
      <List
        component="nav"
        aria-labelledby="Shop By Category"
        subheader={
          <ListSubheader
            component="div"
            id="shopByCategory"
            style={{ position: "static" }}
          >
            Shop By Category
          </ListSubheader>
        }
        className={classes.root}
      >
        {["MEN", "WOMEN", "HEALTH", "MOBILES"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
        <Accordion expanded={isAccordianOpen}>
          <div className={`${isAccordianOpen ? "hidden" : "static"}`}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="See All Categories"
              id="seeAllCategories"
              onClick={() => setIsAccordianOpen((state) => !state)}
            >
              <Typography>See All</Typography>
            </AccordionSummary>
          </div>
          <AccordionDetails
            classes={{
              root: classes.accordianDetails,
            }}
            className={`${isAccordianOpen ? "-mt-4" : ""}`}
          >
            <List classes={{ root: classes.listDetails }}>
              {[
                "GROCERY",
                "JEWELLERY",
                "KIDS",
                "ELECTRONICS",
                "FURNITURE",
                "SHOES",
                "BOOKS",
              ].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
          <div className={`${isAccordianOpen ? "static" : "hidden"}`}>
            <AccordionSummary
              expandIcon={<ExpandLessIcon />}
              aria-controls="See All Categories"
              id="seeAllCategories"
              onClick={() => setIsAccordianOpen((state) => !state)}
            >
              <Typography>See Less</Typography>
            </AccordionSummary>
          </div>
        </Accordion>
      </List>
      <List
        component="nav"
        aria-labelledby="Quick Links"
        subheader={
          <ListSubheader component="div" id="quickLinks">
            Quick Links
          </ListSubheader>
        }
        className={classes.root}
      >
        {["Your Orders", "Your Favourites", "Your Coupons", "Your Account"].map(
          (text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          )
        )}
      </List>
      <Divider />
      <List
        component="nav"
        aria-labelledby="Help and Settings"
        subheader={
          <ListSubheader component="div" id="helpAndSettings">
            Help And Settings
          </ListSubheader>
        }
        className={classes.root}
      >
        {[
          "Choose Language",
          "Add/Change Address",
          "Customer Service",
          "Privacy Policy",
          "Logout",
        ].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <Drawer
        anchor="left"
        open={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      >
        <div className="sticky top-0 z-20 bg-blue-600 text-center py-2">
          <Typography className={classes.typographyText}>
            Welcome to Ecstasy
          </Typography>
        </div>
        {list()}
      </Drawer>
    </div>
  );
};

export default React.memo(Sidebar);
