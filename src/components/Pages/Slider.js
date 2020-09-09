import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import image1 from "../../assets/image1.jpeg";
import image2 from "../../assets/image2.jpg";
import image3 from "../../assets/image3.jpeg";
import image4 from "../../assets/image4.jpg";
import image5 from "../../assets/image5.jpeg";
import image6 from "../../assets/image6.jpeg";
import image7 from "../../assets/image7.jpg";
import image8 from "../../assets/image8.jpeg";
import image9 from "../../assets/image9.jpg";

function Slider() {
  return (
    <section>
      <Carousel
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        infiniteLoop
        useKeyboardArrows
        autoPlay
      >
        <div>
          <img src={image1} alt={"Image 1"} />
        </div>
        <div>
          <img src={image2} alt={"Image 2"} />
        </div>
        <div>
          <img src={image3} alt={"Image 3"} />
        </div>
        <div>
          <img src={image4} alt={"Image 4"} />
        </div>
        <div>
          <img src={image5} alt={"Image 5"} />
        </div>
        <div>
          <img src={image6} alt={"Image 2"} />
        </div>
        <div>
          <img src={image7} alt={"Image 3"} />
        </div>
        <div>
          <img src={image8} alt={"Image 4"} />
        </div>
        <div>
          <img src={image9} alt={"Image 5"} />
        </div>
      </Carousel>
    </section>
  );
}

Slider.propTypes = {};
Slider.propTypes = {};

export default Slider;
