import React, { useState, useEffect } from "react";
import { Container, Grid, Divider, Typography, Paper } from "@material-ui/core";
import image from "../../../assets/main.svg";
function Breakfast(props) {
  const [ingredients, setIngredients] = useState([]);
  const [breakfast, setBreakfast] = useState(props.breakfast);
  useEffect(() => {
    if (props.breakfast) {
      var data = props.breakfast;
      var ingredients = data.Ingredients;
      setBreakfast(props.breakfast);
      setIngredients(ingredients);
    }
  }, [props.breakfast]);

  return (
    <Grid
      className="card"
      item
      xs={12}
      md={4}
      lg={3}
      sm={12}
      xl={3}
      spacing={2}
    >
      <Grid container className="info-text">
        <Grid container>
          <Grid item xs={8} md={8} lg={8} sm={8} xl={8} spacing={4}>
            <h2> {breakfast.itemName} </h2>
          </Grid>
          <Grid item alignContent="right">
            <h2> {breakfast.price} </h2>
          </Grid>
        </Grid>
      </Grid>
      <Grid container className="listItem">
        {ingredients.map((ingredient, s) => {
          return (
            <Grid>
              <p>{ingredient}</p>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}

export default Breakfast;
