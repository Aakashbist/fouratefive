import React, { useEffect, useState } from "react";
import { Grid, Container } from "@material-ui/core";
import { MenuDetails } from "../../../api/data";
import Breakfast from "./Breakfast";
import Lunch from "./Lunch";

const Menu = () => {
  const breakfastList = MenuDetails.BREAKFAST;
  const lunchList = MenuDetails.LUNCH;

  const breakfastLists = breakfastList.map((breakfast, i) => (
    <Breakfast breakfast={breakfast} key={i} />
  ));
  const lunchLists = lunchList.map((lunch, i) => (
    <Lunch lunch={lunch} key={i} />
  ));

  return (
    <section className="menu" id="menu">
      <Grid>
        <h1 className="title">
          FOUR
          <br /> ATE
          <br />
          FIVE
        </h1>

        <Grid className="topography">
          <h1>BREAKFAST</h1>
        </Grid>
        <Grid container justify="center">
          {breakfastLists}
        </Grid>

        <Grid className="topography">
          <h1>LUNCH</h1>
        </Grid>
        <Grid container justify="center">
          {lunchLists}
        </Grid>
      </Grid>
    </section>
  );
};

export default Menu;
