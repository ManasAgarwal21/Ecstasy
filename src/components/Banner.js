import React, { useState } from "react";
import ReactInterval from "react-interval";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

const tutorialSteps = [
  "https://rukminim1.flixcart.com/flap/1688/280/image/d7dd5e4e04f6bfbc.jpg?q=50",
  "https://rukminim1.flixcart.com/flap/1688/280/image/ef7552ac675cf4c2.jpeg?q=50",
  "https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg",
  "https://rukminim1.flixcart.com/flap/1688/280/image/57e30b9aea26db65.jpeg?q=50",
  "https://i.ytimg.com/vi/dVuyfNVcwO4/maxresdefault.jpg",
];

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "10px",
  },
  img: {
    height: 255,
    overflow: "auto",
    backgroundSize: "contain",
    width: "100%",
  },
}));

const Banner = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => {
      if (prevActiveStep === maxSteps - 1) return 0;
      else return prevActiveStep + 1;
    });
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => {
      if (prevActiveStep === 0) return maxSteps - 1;
      else return prevActiveStep - 1;
    });
  };

  return (
    <div className={classes.root}>
      <ReactInterval timeout={3000} enabled={true} callback={handleNext} />
      <img
        className={classes.img}
        src={tutorialSteps[activeStep]}
        alt={tutorialSteps[activeStep]}
      />
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="dots"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext}>
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </div>
  );
};

export default Banner;
