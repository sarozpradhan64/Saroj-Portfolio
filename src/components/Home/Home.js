import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import home from "./home.svg";
import "./Home.css";
import home2 from "./Home2.svg";
import axios from "axios";

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
          <h1>Saroj Pradhan</h1>

          <ul>
            <li>Web Developer</li>
            <li>Programmer/Coder</li>
            <li>Student/Teacher(part-time)</li>
          </ul>
        </div>
        <div className="home_image">
          <img src={home}></img>
        </div>
      </div>

      <div className="about">
        <div className="about_image">
          <img src={home2}></img>
        </div>

        <div className="about_detail">
          <h1>About me</h1>
          <p>{profiledata.about}</p>
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
