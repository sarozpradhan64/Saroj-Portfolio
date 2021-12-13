import React from "react";
import { Helmet } from "react-helmet";
import Card from "./Card";
import "./Projects.css";
import "./img2.svg";
import img0 from "./project_img/todo.png";
import img1 from "./project_img/travel.png"
function Projects() {
  const name = "Todo app";
  const detail = ["-Local Storage", "-Managing tasks"];

  const link = "https://sarojtodoapp.netlify.app";

   const name1 = "Travel Green Nepal"
    const detail1 = ["Travel Blog site","built on wordpress"]
    const link1 ="https://travelgreennepal.com"

  return (
    <div className="project_main">
      <Helmet>
  <title>Saroj | Projects</title>
</Helmet>
      <div className="project_intro">
        <h1>Here are my Works </h1>
      </div>
      <div className="project_container">
        <div className="project">
          <Card name={name} detail={detail} image={img0} link={link} />
        </div>
        <div className="project">
          <Card name={name1} detail={detail1} image={img1} link={link1} />
        </div>{" "}
        {/*    <div className="card">
            <Card name={name1} detail={detail1} image={image1}/>
            </div> */}
      </div>
    </div>
  );
}

export default Projects;
