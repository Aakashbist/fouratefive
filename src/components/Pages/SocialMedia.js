import { Grid } from "@material-ui/core";
import { Call, Facebook, Instagram } from "@material-ui/icons";
import React from "react";

function SocialMedia() {
  return (
    <div>
      <Grid container justify="left" spacing={3}>
        <Grid item style={{ color: "#0096EF" }}>
          <a
            href="https://www.facebook.com/fouratefive"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="socialMediaIcon" />
          </a>
        </Grid>
        {/* <Grid item style={{ color: "#20A464" }}>
          <a rel="noopener noreferrer">
            <Call className="socialMediaIcon" />
          </a>
        </Grid> */}
        <Grid item style={{ color: "#7f1734" }}>
          <a
            target="_blank"
            href="https://www.instagram.com/explore/locations/145210/fouratefive/?hl=en"
            rel="noopener noreferrer"
          >
            <Instagram className="socialMediaIcon" />
          </a>
        </Grid>
      </Grid>
    </div>
  );
}
export default SocialMedia;
