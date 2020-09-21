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
      <Container>
        <Grid container direction="column" justify="center" alignItems="center">
          <Grid className="topography">
            <h1>Post your comments</h1>
          </Grid>
          {/* <form onSubmit={handleSubmit(onSubmit)}> */}
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item xs={7} md={6} lg={6} sm={7} spacing={1}>
              <TextField
                variant="outlined"
                className="textfield"
                name="message"
                rows="5"
                multiline
                fullWidth
                placeholder="Message"
                autoCapitalize="none"
                inputRef={register({ required: true })}
              />
            </Grid>
            <Grid item xs={3} md={6} lg={4} sm={3} spacing={1}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
          {/* </form> */}
          <Grid container justify="center" alignItems="center">
            {reviews &&
              reviews.map((review, key) => {
                return (
                  <Grid
                    container
                    className="card"
                    direction="column"
                    justify="center"
                    alignItems=""
                  >
                    <Grid direction="row" justify="space-evenly" spacing={2}>
                      <Grid item>
                        <Avatar />
                      </Grid>
                      <Grid item>{review.date}</Grid>
                    </Grid>
                    <Grid>
                      <h2>{review.review}</h2>
                    </Grid>
                  </Grid>
                );
              })}
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Review;
