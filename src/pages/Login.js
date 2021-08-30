import React, {useEffect, useState} from 'react';
import { Avatar, Container, 
    Typography, TextField, 
    Button, Checkbox,
    FormControlLabel, Icon,
    Grid, Box, FormControl, 
    InputAdornment, IconButton,
    OutlinedInput, InputLabel } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link, Redirect } from 'react-router-dom';
import { LockOutlined, Visibility, VisibilityOff } from '@material-ui/icons';
import { useSelector, useDispatch } from 'react-redux';
import { getData } from '../redux/selectors/user.selectors';
import {updateUser} from '../redux/actions/user.actions';

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.light,
    },
    text:{
        color: theme.palette.primary.dark,
        '&:hover': {
            textDecoration: 'underline'
        }
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    }
}));

export default function Login({location}){
    const classNames = useStyles();
    const {userReducer} = useSelector(getData);
    const dispatch = useDispatch();

    const [user, setUser] = useState({
        password: userReducer.password,
        email: userReducer.email
    });

    const [extras, setExtras] = useState({
        showPassword: false,
        error: '',
        message: '',
        redirectToReferrer: false
    });

    useEffect(() => {
        dispatch(updateUser(user));
    }, [dispatch, user]);

    const handleChange = (prop) => (event) =>  {
        setUser({ ...user, [prop]: event.target.value});
    }

    const handleClickShowPassword = () => {
        setExtras({ ...extras, showPassword: !extras.showPassword});
    }
    
    const handleMouseDownPassword = event => {
        event.preventDefault();
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        setExtras({...extras, redirectToReferrer: true});
    }

    const {redirectToReferrer} = extras;
    
    if(redirectToReferrer){
        return (
            <Redirect to={{
                pathname: "/",
                state: {from : location}
            }}/>
        )
    }

    return (
        <Container component="main" maxWidth="xs">
            <div className={classNames.paper}>
                {/* for lock icon in the page */}
                <Avatar className={classNames.avatar}>
                    <LockOutlined/>
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
                        onChange={handleChange('email')}
                        value={user.email}
                        autoComplete="email"
                        autoFocus/>
                    <FormControl variant="outlined" required fullWidth>
                        <InputLabel htmlFor="password">
                            Password
                        </InputLabel>
                        <OutlinedInput
                            id="password"
                            onChange={handleChange('password')}
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
                            labelWidth={80}
                        />
                    </FormControl>
                    <br/>
                    {
                        extras.error && (<Typography component="p" color="error">
                            <Icon color="error">error</Icon>
                            {extras.error}
                        </Typography>)
                    }
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary"/>}
                        label="Remember me"/>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color='primary'
                        onClick={handleSubmit}
                        className={classNames.submit}>
                            Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link to="/forgot" className={classNames.text}>
                                {"Forgot password?"}
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link to="/signup" className={classNames.text}>
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Typography variant="body2" color="textSecondary" align="center">
                    {'Copyright '} &copy; {'Ecstacy 2021.'}
                </Typography>
            </Box>
        </Container>
    );
}