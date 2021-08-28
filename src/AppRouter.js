import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Signup from './components/signup';
import Login from './components/login';
import Home from './components/Home';

const AppRouter = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={ Home }/>
                <Route exact path="/signup" component={ Signup }/>
                <Route exact path="/signin" component={ Login }/>
            </Switch>
        </div>
    )
};

export default AppRouter;