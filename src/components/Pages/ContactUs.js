import React, { useEffect, useState } from "react";
import {
  Grid,
  Container,
  Typography,
  TextField,
  Button,
  Icon,
  Box,
} from "@material-ui/core";
import img from "../../assets/contactuspage.jpg";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { makeStyles } from "@material-ui/core/styles";
import FollowUs from "./FollowUs";

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
  const [error, setError] = useState();
  const classes = useStyles();
  let { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log("data ", data);
  };

  function sendEmail(e, data) {
    e.preventDefault();
    alert(data);
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
        <Grid justify="center" alignItems="center" spacing={2}>
          <Grid item className="topography">
            <h1>CONTACT US</h1>
          </Grid>

          {/* <Grid item>
            <img src={img} />
          </Grid> */}

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
              <form onSubmit={sendEmail}>
                <Grid item>
                  <TextField
                    variant="outlined"
                    className="textfield"
                    name="name"
                    // value={name}
                    // onChangeText={(description) =>
                    //   setDescription(description)
                    // }
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
                    // value={email}
                    // onChangeText={(description) =>
                    //   setDescription(description)
                    // }
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
                    // value={message}
                    // onChangeText={(description) =>
                    //   setDescription(description)
                    // }
                    fullWidth
                    placeholder="Message"
                    autoCapitalize="none"
                  />
                </Grid>
                <Grid item>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.margin}
                    onClick={handleSubmit(sendEmail)}
                  >
                    Submit
                  </Button>
                </Grid>
                <Grid item>
                  <p style={{ color: "red" }}>{error}</p>
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
