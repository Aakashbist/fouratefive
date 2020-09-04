import React from "react";
import { Route, Switch, Redirect, useLocation, Router } from "react-router-dom";
import paths from "../../constants/AppRoute";
import Home from "../Pages/Home";
import Review from "../Pages/Review";

const MainAuth = () => {
  let location = useLocation();
  return (
    <Switch location={location}>
      <Route component={Home} />
      {/*
      <Route exact path="/review" component={Review} /> */}
    </Switch>
  );
};

export default MainAuth;
