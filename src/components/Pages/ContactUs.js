import { Button, Container, Grid, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import emailjs from "emailjs-com";
import React from "react";
import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
    "& .MuiInputBase-input": {
      color: "#535353 !important",
      fontSize: "15px !important",
      paddingTop: "14.5px !important",
    },
  },
}));

const ContactUs = () => {
  const classes = useStyles();
  let { reset, register, handleSubmit, errors } = useForm();

  function sendEmail(data) {
    var templateParams = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    // e.preventDefault(); "gmail", "template_tetglfn", templateParams, "user_PNExwXoFc1St0SmCf9zHS"
    emailjs
      .send(
        "gmail",
        "template_tetglfn",
        templateParams,
        "user_PNExwXoFc1St0SmCf9zHS"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    reset({
      name: "",
      email: "",
      message: "",
    });
  }
  return (
    <section className="contact" id="contactUs">
      <Container>
        <Grid justify="center" alignItems="center" spacing={2}>
          <Grid item className="topography">
            <h1>CONTACT US</h1>
          </Grid>

          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item sm={12} lg={5} md={5}>
              <Grid item>
                <h1>Hours</h1>
                <p>
                  Monday - Friday - 7am-2.30pm
                  <br />
                  Saturday - 7:30am - 2.30pm
                  <br />
                  Sunday - 8:00am - 2:30pm
                </p>
              </Grid>
              <Grid item>
                <h1>Location</h1>
                <p>485 Crown Street, Surry Hills, NSW, 2010, Australia </p>
              </Grid>
            </Grid>

            <Grid
              item
              container
              direction="column"
              sm={12}
              lg={5}
              md={5}
              className="card"
            >
              <form onSubmit={handleSubmit(sendEmail)}>
                <Grid item>
                  <TextField
                    variant="outlined"
                    className="textfield"
                    name="name"
                    error={errors.name ? true : false}
                    inputRef={register({ required: true })}
                    fullWidth
                    placeholder="first name"
                    autoCapitalize="none"
                  />
                </Grid>
                <Grid item>
                  <TextField
                    variant="outlined"
                    className="textfield"
                    name="email"
                    inputRef={register({ required: true })}
                    error={errors.email ? true : false}
                    fullWidth
                    placeholder="Email"
                    autoCapitalize="none"
                  />
                </Grid>
                <Grid item>
                  <TextField
                    variant="outlined"
                    className="textfield"
                    name="message"
                    rows="5"
                    multiline
                    inputRef={register({ required: true })}
                    fullWidth
                    error={errors.message ? true : false}
                    placeholder="Message"
                    autoCapitalize="none"
                  />
                </Grid>
                <Grid item style={{ color: "red" }}></Grid>
                <Grid item>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.margin}
                  >
                    Submit
                  </Button>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default ContactUs;
