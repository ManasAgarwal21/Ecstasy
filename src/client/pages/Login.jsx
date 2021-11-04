import React, { useEffect, useState } from "react";
import {
  Avatar,
  Container,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Icon,
  Box,
  FormControl,
  InputAdornment,
  IconButton,
  OutlinedInput,
  InputLabel,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link, Redirect } from "react-router-dom";
import { LockOutlined, Visibility, VisibilityOff } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../redux/selectors/user.selectors";
import { updateUser } from "../redux/actions/user.actions";
import { signin } from "../api/api-auth";
import { encrypt } from "../../server/config/encrypt";
import { authenticate } from "./../../server/controller/auth-helper";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(4),
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: `${theme.palette.primary.light} !important`,
  },
  links: {
    display: "flex",
    margin: "0px 10px",
    justifyContent: "space-between",
  },
  text: {
    color: theme.palette.primary.dark,
    textAlign: "center",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  form: {
    width: "100%",
    marginTop: `${theme.spacing(1)} !important`,
  },
  submit: {
    margin: `${theme.spacing(3, 0, 2)} !important`,
  },
}));

export default function Login({ location }) {
  const classNames = useStyles();
  const { userReducer } = useSelector(getUser);
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    password: userReducer.password,
    email: userReducer.email,
  });

  const [extras, setExtras] = useState({
    showPassword: false,
    error: "",
    message: "",
    remember: false,
    redirectToReferrer: false,
  });

  useEffect(() => {
    dispatch(updateUser(user));
  }, [dispatch, user]);

  const handleChange = (prop) => (event) => {
    setUser({ ...user, [prop]: event.target.value });
  };

  const handleChecked = (event) => {
    if (event.target.checked) setExtras({ ...extras, remember: true });
    else setExtras({ ...extras, remember: false });
  };

  const handleClickShowPassword = () => {
    setExtras({ ...extras, showPassword: !extras.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    signin(user).then((response) => {
      if (response.error) {
        setExtras({ ...extras, error: response.error });
      } else {
        authenticate(response, () => {
          dispatch(updateUser(response.user));
          setExtras({ ...extras, redirectToReferrer: true });
        });
        if (extras.remember)
          localStorage.setItem("ECSID", encrypt(user.email, user.password));
      }
    });
  };

  const { redirectToReferrer } = extras;

  if (redirectToReferrer) {
    return (
      <Redirect
        to={{
          pathname: "/home",
          state: { from: location },
        }}
      />
    );
  }

  return (
    <Container component="main" maxWidth="xs">
      <div className={classNames.paper}>
        {/* for lock icon in the page */}
        <Avatar className={classNames.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classNames.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            onChange={handleChange("email")}
            value={user.email}
            autoComplete="email"
            autoFocus
          />
          <FormControl variant="outlined" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <OutlinedInput
              id="password"
              onChange={handleChange("password")}
              value={user.password}
              type={extras.showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {extras.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              label="password *"
            />
          </FormControl>
          <br />
          {extras.error && (
            <Typography component="p" color="error">
              <Icon color="error">error</Icon>
              {extras.error}
            </Typography>
          )}
          <FormControlLabel
            control={
              <Checkbox
                value="remember"
                onChange={handleChecked}
                color="primary"
              />
            }
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            className={classNames.submit}
          >
            Sign In
          </Button>
          <div className={classNames.links}>
            <Link to="/forgot" className={classNames.text}>
              {"Forgot password?"}
            </Link>
            <Link to="/signup" className={classNames.text}>
              {"New user? Sign Up"}
            </Link>
          </div>
        </form>
      </div>
      <Box mt={8}>
        <Typography variant="body2" color="textSecondary" align="center">
          {"Copyright "} &copy; {"Ecstacy 2021."}
        </Typography>
      </Box>
    </Container>
  );
}
