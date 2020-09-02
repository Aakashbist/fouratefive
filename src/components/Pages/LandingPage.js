import React from "react";

import SocialMedia from "./SocialMedia";
import image from "../../assets/main.svg";
import { Grid } from "@material-ui/core";

function Home() {
  return (
    <section className="home" id="landingPage">
      <Grid
        container
        direction="column"
        justify={"center"}
        alignItems={"center"}
        className="item"
      >
        <Grid
          container
          item
          xs={12}
          sm={10}
          md={12}
          lg={12}
          justify={"center"}
          alignItems={"center"}
        >
          <Grid
            container
            direction="row"
            justify={"space-between"}
            alignItems={"center"}
          >
            <Grid
              container
              direction="row"
              justify={"space-between"}
              alignItems={"center"}
              className=""
            >
              <Grid container item xs={12} sm={12} md={12} lg={12}>
                <Grid
                  container
                  direction="column"
                  justify="space-evenly"
                  className="info-text"
                >
                  <h1> SURRY HILLS LOCAL </h1>{" "}
                  <h2>
                    SINGLE O COFFEE, MIDDLE - EASTERN INSPIRED FOOD, HEARTY
                    SANDWICHES, HEALTHY SALADS, SUPERFOOD SMOOTHIES, HOME MADE
                    CAKES BREAKFAST & LUNCH, 7 DAYS A WEEK.{" "}
                  </h2>{" "}
                </Grid>{" "}
              </Grid>{" "}
            </Grid>{" "}
          </Grid>{" "}
        </Grid>{" "}
      </Grid>{" "}
    </section>
    //  <div className="home" id="landingPage">

    // <div>

    //     <div className="container">

    //       <div className="containSection">
    //         <div className="home__statement_text">
    //           <h2>I'm a software developer with experience in web and android application development. I mostly love to work with Java, Kotlin, C#, React Native, SQL and Firebase</h2>
    //         </div>
    //         <div className="home__socialMedia">
    //           <SocialMedia />
    //         </div>
    //       </div>
    //       <div className="imageSection">
    //         <img src={image} alt="Logo" className="logo_image" width="80%" />
    //       </div>
    //     </div>

    //   </div>
    //   <div className="slider">

    //   </div>

    // </div>

    // <div >
    //   <div className="home">

    //     <div className="container">

    //       <div className="home__statement_text">
    //         <h2>
    //           Mobile and Web Application Developer
    //       </h2>
    //         <p>I'm a software developer with experience in web and android application development. I mostly love to work with Java, Kotlin, C#, React Native, SQL and Firebase

    //         </p>
    //         <div className="home__socialMedia">
    //           <SocialMedia />
    //         </div>

    //       </div>
    //       {/* <div className="xx">
    //         <p>I'm a software developer with experience in web and android application development. I mostly love to work with Java, Kotlin, C#, React Native, SQL and Firebase</p>

    //       </div> */}
    //     </div>

    //   </div >
    //   <div className="image" >
    //     {/* <img src={image} /> */}
    //   </div>
    // </div>
  );
}

export default Home;
