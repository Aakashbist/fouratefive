import { Button, Container, Grid, TextField, Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import moment from "moment";

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
              justify="center"
              alignItems="center"
              spacing={2}
            >
              <Grid container item xs={12} sm={12} md={6} lg={6}>
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
              <Grid container item xs={12} sm={12} md={4} lg={4}>
                <Button
                  style={{}}
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

        {/* <Grid item style={{ color: "red" }}>
          {errors.message && <span>This is required</span>}
        </Grid> */}
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
                  justify="center"
                  alignItems="center"
                  item
                  xs={12}
                  sm={12}
                  md={3}
                  lg={3}
                  alignItems=""
                >
                  <Grid
                    direction="row"
                    alignItems="center"
                    justify="center"
                    spacing={2}
                  >
                    <Grid item container justify="center" alignItems="center">
                      <Avatar />
                    </Grid>
                    <Grid>{review.date}</Grid>
                  </Grid>
                  <Grid>
                    <h2>{review.review}</h2>
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
