import { Container, Grid, TextField, Button } from "@material-ui/core";
import React from "react";
import img from "../../assets/contactuspage.jpg";
import insta1 from "../../assets/image8.jpeg";
import insta2 from "../../assets/image2.jpeg";
import insta3 from "../../assets/image4.jpeg";
import insta4 from "../../assets/image5.jpeg";

const FollowUs = () => {
  return (
    <section className="followUs" id="contactUs">
      <Container>
        <Grid className="topography">
          <h1>
            Follow us! @
            <a
              target="_blank"
              href="https://www.instagram.com/explore/locations/145210/fouratefive/?hl=en"
              rel="noopener noreferrer"
            >
              FiveAtFour
            </a>
          </h1>
        </Grid>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
          spacing={2}
          style={{ padding: "5px" }}
        >
          <Grid item xs={5} md={2} lg={2} sm={5} spacing={1}>
            <img src={insta1} />
          </Grid>
          <Grid item xs={5} md={2} lg={2} sm={5} spacing={1}>
            <img src={insta2} />
          </Grid>
          <Grid item xs={5} md={2} lg={2} sm={5} spacing={1}>
            <img src={insta3} />
          </Grid>
          <Grid item xs={5} md={2} lg={2} sm={5} spacing={1}>
            <img src={insta4} />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default FollowUs;
