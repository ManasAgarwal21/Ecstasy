import {
  Container,
  Typography,
  TextField,
  Button,
  Avatar,
  FormControl,
  InputAdornment,
  IconButton,
  OutlinedInput,
  Grid,
  Icon,
  InputLabel,
  Box,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { LockOutlined, Visibility, VisibilityOff } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { updateUser } from "../redux/actions/user.actions";
import { create } from "../api/api-user";

const useStyles = makeStyles((theme) => ({
  main: {
    marginTop: theme.spacing(8),
    height: "100vh",
    [theme.breakpoints.down("xs")]: {
      marginTop: theme.spacing(2),
    },
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.light,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  text: {
    color: theme.palette.primary.dark,
    float: "right",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  submit: {
    margin: theme.spacing(3, 0, 1),
  },
}));

export default function Signup(props) {
  const classNames = useStyles();
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    role: "",
    password: "",
    confirmPassword: "",
    email: "",
  });
  const [extras, setExtras] = useState({
    showPassword: false,
    showConfirmPassword: false,
    open: false,
    error: "",
    message: "",
  });

  useEffect(() => {
    dispatch(updateUser(user));
  }, [dispatch, user]);

  const handleChange = (name) => (event) => {
    setUser({ ...user, [name]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setExtras({ ...extras, showPassword: !extras.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickShowConfirmPassword = () => {
    setExtras({ ...extras, showConfirmPassword: !extras.showConfirmPassword });
  };

  const handlePasswordMatch = () => {
    if (user.confirmPassword === user.password) {
      return true;
    }
    return false;
  };

  const clickSubmit = (event) => {
    event.preventDefault(); 
    if (!handlePasswordMatch()) {
      setExtras({
        ...extras,
        error: "Confirm password is different",
        message: "",
      });
      return;
    } else {
      const user_data = {
        name: user.firstName + " " + user.lastName,
        email: user.email,
        password: user.password,
        role: user.role,
      }
      create(user_data).then((data) => {
        if(data.error){
          setExtras({...extras, error: data.error, message: ""});
        }
        else{
          setExtras({ ...extras, open: true });
        }
      })
    }
  };

  const { open } = extras;
  if (open) {
    return (
      <Redirect
        to={{
          pathname: "/login",
          state: { from: props.location },
        }}
      />
    );
  }

  return (
    <Container className={classNames.main} component="main" maxWidth="xs">
      <div className={classNames.paper}>
        <Avatar className={classNames.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form className={classNames.form} noValidate>
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                required
                id="first-name"
                label="First Name"
                name="first-name"
                onChange={handleChange("firstName")}
                value={user.firstName}
                autoComplete="text"
                fullWidth
                autoFocus
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="last-name"
                label="Last Name"
                name="last-name"
                onChange={handleChange("lastName")}
                value={user.lastName}
                autoComplete="text"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Id"
                name="email"
                onChange={handleChange("email")}
                value={user.email}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="role"
                label="Role"
                name="role"
                onChange={handleChange("role")}
                value={user.role}
                autoComplete="text"
              />
            </Grid>
            <Grid item xs={12}>
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
                        {extras.showPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  labelWidth={80}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl variant="outlined" required fullWidth>
                <InputLabel htmlFor="confirm-password">
                  Confirm Password
                </InputLabel>
                <OutlinedInput
                  id="confirm-password"
                  onChange={handleChange("confirmPassword")}
                  value={user.confirmPassword}
                  type={extras.showConfirmPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowConfirmPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {extras.showConfirmPassword ? (
                          <Visibility />
                        ) : (
                          <VisibilityOff />
                        )}
                      </IconButton>
                    </InputAdornment>
                  }
                  labelWidth={145}
                />
              </FormControl>
            </Grid>
            <br />
            {extras.error && (
              <Typography component="p" color="error">
                <Icon color="error">error</Icon>
                {extras.error}
              </Typography>
            )}
            {extras.message && (
              <p style={{ color: "#4caf50" }}>{extras.message}</p>
            )}
            <Grid item xs={12}>
              <Button
                className={classNames.submit}
                color="primary"
                fullWidth
                onClick={clickSubmit}
                variant="contained"
                type="submit"
              >
                Sign Up
              </Button>
            </Grid>
          </Grid>
          <Link to="/login" className={classNames.text}>
            {"Already have an account? Sign In"}
          </Link>
        </form>
      </div>
      <Box mt={2}>
        <Typography variant="body2" color="textSecondary" align="center">
          {"Copyright "} &copy; {"Ecstacy 2021."}
        </Typography>
      </Box>
    </Container>
  );
}
