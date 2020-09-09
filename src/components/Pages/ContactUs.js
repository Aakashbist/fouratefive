import React, { useEffect, useState } from "react";
import { Grid, Container, TextField, Button, Icon } from "@material-ui/core";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import Map from "../Map";

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
  let { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log("data ", data);
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_tetglfn",
        e.target,
        "user_PNExwXoFc1St0SmCf9zHS"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <section className="contact" id="contactUs">
      <Container>
        {/* <Grid className="topography">
          <h1>CONTACT US</h1>
        </Grid> */}
        {/* <Grid>
          <Map />
        </Grid> */}
        <Grid container direction="column">
          <Grid container direction="row" justify={"space-between"}>
            <Grid item xs={12} sm={12} md={5} lg={5} className="card">
              <Grid
                container
                direction="row"
                // alignItems="center"
                // justify="left"
              >
                <Map />
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} className="card">
              <Grid container direction="row" style={{ marginTop: "2vw" }}>
                <Grid container item xs={12} sm={12} md={12} lg={12}>
                  <Grid container direction="column">
                    <form onSubmit={sendEmail}>
                      <Grid
                        container
                        direction="row"
                        justify={"space-between"}
                        spacing={3}
                      >
                        <Grid container item xs={12} sm={12} md={12} lg={12}>
                          <TextField
                            variant="outlined"
                            className="textfield"
                            name="name"
                            // value={description}
                            // onChangeText={(description) =>
                            //   setDescription(description)
                            // }
                            fullWidth
                            placeholder="first name"
                            autoCapitalize="none"
                          />
                        </Grid>
                      </Grid>
                      <Grid container direction="row">
                        <Grid container item xs={12} sm={12} md={12} lg={12}>
                          <TextField
                            name="email"
                            variant="outlined"
                            className="textfield"
                            fullWidth
                            // errors={!!errors.email}
                            placeholder="Email*"
                            // fieldRequired={register({
                            //   pattern: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                            //   required: true,
                            // })}
                          />
                        </Grid>
                      </Grid>
                      <Grid
                        container
                        direction="row"
                        justify={"space-between"}
                        alignItems={"center"}
                      >
                        <Grid
                          container
                          item
                          xs={12}
                          sm={12}
                          md={12}
                          lg={12}
                          justify={"space-between"}
                          alignItems="center"
                        >
                          <TextField
                            id="standard-basic"
                            name="message"
                            variant="outlined"
                            className="textfield"
                            fullWidth
                            multiline
                            // // errors={!!errors.company_name}
                            // fieldRequired={register({ required: true })}
                            placeholder="message*"
                          />
                        </Grid>
                      </Grid>

                      <Grid
                        container
                        direction="row"
                        alignItems="center"
                        justify="center"
                      >
                        <Grid
                          container
                          direction="row"
                          alignItems="center"
                          justify="center"
                        >
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
                      </Grid>
                      <br />

                      <br />
                    </form>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default ContactUs;
