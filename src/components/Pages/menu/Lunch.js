import React, { useEffect, useState } from "react";
import { Grid, Container } from "@material-ui/core";

const Lunch = (props) => {
  const [ingredients, setIngredients] = useState([]);
  const [lunch, setLunch] = useState(props.lunch);
  useEffect(() => {
    if (props.lunch) {
      var data = props.lunch;
      var ingredients = data.Ingredients;
      setLunch(props.lunch);
      setIngredients(ingredients);
    }
  }, [props.lunch]);

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
            <h2> {lunch.itemName} </h2>
          </Grid>
          <Grid item alignContent="right">
            <h2> {lunch.price} </h2>
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
};
export default Lunch;
