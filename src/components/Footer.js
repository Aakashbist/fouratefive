import { Container, Grid } from "@material-ui/core";
import React from "react";
import SocialMedia from "./Pages/SocialMedia";
import {
  LocalActivityOutlined,
  LocationCity,
  LocalDining,
  LocalActivityRounded,
  HomeOutlined,
  Email,
  Phone,
  EmailOutlined,
  PhoneAndroidOutlined,
  Call,
  Store,
} from "@material-ui/icons";

function Footer() {
  return (
    <section className="footer" style={{ textAlign: "left", padding: 20 }}>
      <Container>
        <Grid container direction="row">
          <Grid container direction="row" justify={"space-between"} spacing={3}>
            <Grid
              container
              direction="row"
              justify={"space-around"}
              alignItems={"flex-start"}
              spacing={3}
            >
              <Grid
                container
                item
                xs={12}
                sm={12}
                md={3}
                lg={3}
                className="info-text"
              >
                <Grid container>
                  <Grid item className="socialMediaIcon">
                    <h1>Social Media</h1>
                    <SocialMedia />
                  </Grid>
                </Grid>
              </Grid>
              <Grid container item xs={12} sm={12} md={3} lg={3}>
                <Grid container>
                  <Grid item>
                    <h1>Address</h1>

                    <p direction="row">
                      <Store
                        className="socialMediaIcon"
                        style={{ color: "#EA4335" }}
                      ></Store>
                      <span style={{ paddingLeft: "1rem" }}>
                        485 Crown Street, Surry Hills,2010
                      </span>
                    </p>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container item xs={12} sm={12} md={3} lg={3}>
                <Grid container>
                  <Grid item>
                    <h1>Contact Details</h1>
                    <p>
                      <EmailOutlined
                        className="socialMediaIcon"
                        style={{ color: "#FF6A6A" }}
                      ></EmailOutlined>
                      <span style={{ paddingLeft: "1rem" }}>485@gmail.com</span>
                    </p>
                    <p>
                      <Call
                        className="socialMediaIcon"
                        style={{ color: "#20A464" }}
                      ></Call>
                      <span style={{ paddingLeft: "1rem" }}>0453547123</span>
                    </p>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}

export default Footer;
