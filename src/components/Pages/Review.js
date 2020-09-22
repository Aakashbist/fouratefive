import { Button, Container, Grid, TextField, Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import moment from "moment";
import Rating from "@material-ui/lab/Rating";

const Review = () => {
  let { register, handleSubmit, errors } = useForm();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const allReviews = [];
    for (var i = 0; i < localStorage.length; i++) {
      var todo = JSON.parse(localStorage.getItem(localStorage.key(i)));
      allReviews.push(todo);
    }
    prepareReviewForView(allReviews);
  }, []);

  const prepareReviewForView = (data) => {
    console.log("reviews", JSON.stringify(data));
    setReviews(data);
  };

  const onSubmit = (data) => {
    alert(data.message);
    var date = new Date();
    var key = date.getMilliseconds();

    let currentDateTime = moment().parseZone().format("DD/MM/YYYY ");

    var todo = { review: data.message, date: currentDateTime };
    localStorage.setItem(key, JSON.stringify(todo));
    window.location.reload();
  };
  return (
    <section className="review" id="">
      <Grid
        container
        justify="center"
        alignItems="center"
        direction="column"
        spacing={2}
      >
        <Grid
          item
          container
          justify="space-around"
          alignItems="center"
          direction="column"
        >
          <Grid item className="topography">
            <h1>Post your comments</h1>
          </Grid>
          <form
            onSubmit={handleSubmit(onSubmit)}
            style={{ width: "100%", height: "100%" }}
          >
            <Grid
              item
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={2}
            >
              <Grid item style={{ width: "700px" }}>
                <TextField
                  variant="outlined"
                  className="textfield"
                  name="message"
                  rows="5"
                  multiline
                  fullWidth
                  placeholder="Message"
                  autoCapitalize="none"
                  error={errors.message ? true : false}
                  inputRef={register({ required: true })}
                />
              </Grid>
              <Grid item>
                <Button
                  style={{ margin: "10px" }}
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>

        <Grid item className="topography">
          <h2>Reviews</h2>
        </Grid>
        <Grid
          container
          item
          justify="center"
          alignItems="center"
          direction="row"
          spacing={2}
        >
          {reviews &&
            reviews.map((review, key) => {
              return (
                <Grid
                  container
                  className="card"
                  direction="column"
                  item
                  xs={12}
                  sm={12}
                  md={3}
                  lg={3}
                  spacing={2}
                >
                  <Grid
                    item
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                  >
                    <Grid item style={{ flex: 1 }}>
                      <Avatar />
                    </Grid>
                    <Grid item>
                      <Rating defaultValue={2} readOnly />
                    </Grid>
                  </Grid>

                  <Grid item>
                    <h2>{review.review}</h2>
                  </Grid>
                  <Grid item>
                    <p>{review.date}</p>
                  </Grid>
                </Grid>
              );
            })}
        </Grid>
      </Grid>
    </section>
  );
};

export default Review;
