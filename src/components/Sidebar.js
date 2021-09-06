import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import ListSubheader from "@material-ui/core/ListSubheader";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

const useStyles = makeStyles({
  list: {
    width: 250,
    padding: 0,
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
  typographyText:{
    fontWeight:1000,
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
        <Accordion
          expanded={isAccordianOpen}
        >
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
              {["GROCERY", "JWELLERY", "KIDS", "ELECTRONICS","FURNITURE","SHOES","BOOKS"].map((text, index) => (
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
      <React.Fragment>
        <Drawer
          anchor="left"
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        >
          <div className="sticky top-0 z-20 bg-gray-100 text-center py-2">
            <Typography className={classes.typographyText}>Welcome to Ecstasy</Typography>
          </div>
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default React.memo(Sidebar);
