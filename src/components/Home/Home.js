import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import home from "./home.svg";
import web from "./home_img/web.jpg";
import instruct from "./home_img/instruct.jpg";
import code from "./home_img/code.jpg"
import "./Home.css";
import home2 from "./Home2.svg";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [profiledata, setProfiledata] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://blazesrz.pythonanywhere.com/api/profile"
        );
        setProfiledata(res.data[0]);
      } catch (err) {}
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="main">
      <Helmet>
  <title>Saroj | Portfolio</title>
</Helmet>
        <div className="intro">
          <h1>Hi! I'm </h1>
          <h1 className="saroj">Saroj Pradhan</h1>

        <button className="home_button"><a href="#link_about"> About me</a></button>

        </div>
        <div className="home_image">
          <img src={home}></img>
        </div>
      </div>

      <div className="about" id="link_about" >
        <div className="about_image">
          <img src={home2}></img>
        </div>

        <div className="about_detail">
          <h1>About me</h1>
          <p>{profiledata.about}</p>
          <ul class="profession">
            <li> <img class="pro_img" src={web}/><h4 class="img_tags">Web Developer</h4></li>
            <li> <img class="pro_img" src={code}/><h4 class="img_tags">Programmer/Coder</h4></li>
            <li> <img class="pro_img" src={instruct}/><h4 class="img_tags">Computer Instructor</h4></li>
          </ul>
          <button type="button" className="resume">
            <a href={profiledata.resume} target="_blank">
              Resume
            </a>
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
