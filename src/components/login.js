import React, {useEffect, useState} from 'react';
import { Avatar, Container, 
    Typography, TextField, 
    Button, Checkbox,
    FormControlLabel, Icon,
    Grid, Link, Box, FormControl, 
    InputAdornment, IconButton,
    OutlinedInput, InputLabel } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import { Redirect } from 'react-router-dom';
import { LockOutlined, Visibility, VisibilityOff } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import {getData} from './../reducers';

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
    const user = useSelector(getData);
    console.log(user);
    // const dispatch = useDispatch();

    const [values, setValues] = useState({
        password: '',
        email: '',
        showPassword: false,
        error: '',
        message: '',
        redirectToReferrer: false
    });

    const handleChange = (prop) => (event) =>  {
        setValues({ ...values, [prop]: event.target.value});
    }

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword});
    }
    
    const handleMouseDownPassword = event => {
        event.preventDefault();
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
    }

    // useEffect(() => {
    //         setValues({...values, email: user.email, password: user.password})
    // }, [user]);

    // const {redirectToReferrer} = values;
    
    // if(redirectToReferrer){
    //     return (
    //         <Redirect to="/users"/>
    //     )
    // }

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
                        value={values.email}
                        autoComplete="email"
                        autoFocus/>
                    <FormControl variant="outlined" required fullWidth>
                        <InputLabel htmlFor="password">
                            Password
                        </InputLabel>
                        <OutlinedInput
                            id="password"
                            onChange={handleChange('password')}
                            value={values.password}
                            type={values.showPassword ? "text" : "password"}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                    >
                                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            labelWidth={80}
                        />
                    </FormControl>
                    <br/>
                    {
                        values.error && (<Typography component="p" color="error">
                            <Icon color="error">error</Icon>
                            {values.error}
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
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
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