import React from "react";
import { Route, Switch } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { Redirect } from "react-router-dom";

const AppRouter = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>
        <Route exact path="/home" component={Home} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  );
};

export default AppRouter;
