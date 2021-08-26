import {Container,
    Typography, TextField,
    Button, Avatar, FormControl, 
    InputAdornment, IconButton,
    OutlinedInput,Grid, Icon,
    InputLabel, Box } from '@material-ui/core';
import React, {useState} from 'react';
// import { Redirect } from 'react-router-dom';
import { LockOutlined, Visibility, VisibilityOff } from '@material-ui/icons';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
   main: {
       marginTop: theme.spacing(8),
   },
   paper: {
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

export default function Signup(props) {
   const classNames = useStyles();
   const [values, setValues] = useState({
       firstName: '',
       lastName: '',
       role: '',
       password: '',
       confirmPassword: '',
       showPassword: false,
       showConfirmPassword: false,
       email: '',
       open: false,
       error: '',
       message: '',
   });

   const handleChange = name => event => {
       setValues({ ...values, [name]: event.target.value})
   };

   const handleClickShowPassword = () => {
       setValues({ ...values, showPassword: !values.showPassword});
   }
   
   const handleMouseDownPassword = event => {
       event.preventDefault();
   }

   const handleClickShowConfirmPassword = () => {
       setValues({ ...values, showConfirmPassword: !values.showConfirmPassword});
   }

   const handlePasswordMatch = () => {
       if(values.confirmPassword === values.password){
           return true;
       }
       return false;
   }

   const clickSubmit = (event) => {
       event.preventDefault();
       const user = {
           name: values.firstName + ' ' + values.lastName || undefined,
           email: values.email || undefined,
           role: values.tag || 'customer',
           password: values.password || undefined
       }
       if(!handlePasswordMatch()){
           setValues({ ...values, error: 'Confirm password is different', message: ''});
           return;
       }
   };

//    const {open} = values;
//    if(open){
//        return (<Redirect to={{
//            pathname: '/signin',
//            props: values,
//            state: {from: props.location},
//        }}/>)
//    }

   return (
       <Container className={classNames.main} component="main" maxWidth="xs">
           <div className={classNames.paper}>
               <Avatar className={classNames.avatar}>
                   <LockOutlined/>
               </Avatar>
               <Typography component="h1" variant="h5">
                   Sign Up
               </Typography>
               <form className={classNames.form} noValidate>
                   <Grid container spacing={2}>
                       <Grid item xs={6}>
                           <TextField
                               variant="outlined"
                               required
                               id="first-name"
                               label="First Name"
                               name="first-name"
                               onChange={handleChange('firstName')}
                               value={values.firstName}
                               autoComplete="text"
                               fullWidth
                               autoFocus/>
                       </Grid>
                       <Grid item xs={6}>
                           <TextField
                               variant="outlined"
                               required
                               fullWidth
                               id="last-name"
                               label="Last Name"
                               name="last-name"
                               onChange={handleChange('lastName')}
                               value={values.lastName}
                               autoComplete="text"/>
                       </Grid>
                       <Grid item xs={12} sm={6}>
                           <TextField
                               variant="outlined"
                               required
                               fullWidth
                               id="email"
                               label="Email Id"
                               name="email"
                               onChange={handleChange('email')}
                               value={values.email}
                               autoComplete="email"/>
                       </Grid>
                       <Grid item xs={12} sm={6}>
                           <TextField
                               variant="outlined"
                               required
                               fullWidth
                               id="role"
                               label="Role"
                               name="role"
                               onChange={handleChange('role')}
                               value={values.role}
                               autoComplete="text"/>
                       </Grid>
                       <Grid item xs={12}>
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
                       </Grid>
                       <Grid item xs={12}>
                           <FormControl variant="outlined" required fullWidth>
                               <InputLabel htmlFor="confirm-password">
                                   Confirm Password
                               </InputLabel>
                               <OutlinedInput
                                   id="confirm-password"
                                   onChange={handleChange('confirmPassword')}
                                   value={values.confirmPassword}
                                   type={values.showConfirmPassword ? "text" : "password"}
                                   endAdornment={
                                       <InputAdornment position="end">
                                           <IconButton
                                           aria-label="toggle password visibility"
                                           onClick={handleClickShowConfirmPassword}
                                           onMouseDown={handleMouseDownPassword}
                                           edge="end"
                                           >
                                           {values.showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                                           </IconButton>
                                       </InputAdornment>
                                   }
                                   labelWidth={145}
                               />
                           </FormControl>
                       </Grid>
                       <br/>
                       {
                           values.error && (<Typography component="p" color="error">
                               <Icon color="error">error</Icon>
                               {values.error}
                           </Typography>)
                       }
                       {
                           values.message && (
                               <p style={{color:"#4caf50"}}>
                                   {values.message}
                               </p>
                           )
                       }
                       <Grid item xs={12}>
                           <Button 
                               className={classNames.submit}
                               color="primary" 
                               fullWidth
                               onClick={clickSubmit}
                               variant="contained"
                               type="submit">
                                   Sign Up
                           </Button>
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