import React from "react";
import { Helmet } from "react-helmet";
import Gcard from "./Gcard";
import pic1 from "./image1.jpg";
import pic2 from "./image2.jpg";
import "./Gallery.css";
function Gallery() {
  return (
    <div className="gallery_main">
      <Helmet>
  <title>Saroj | Gallery</title>
</Helmet>
      <div className="gallery_intro">
        <h1>Pictures that reflects me </h1>
      </div>
      <div className="gallery_container">
        <div className="gallery">
          <Gcard image={pic1} title="poonhill" />
        </div>
        <div className="gallery">
          <Gcard image={pic2} title="Cloud Forest" />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
