import React from "react";
import Card from "./Card";
import "./Projects.css";
import "./img2.svg";
import img1 from "./todo.png";
function Projects() {
  const name = "Todo app";
  const detail = ["-Local Storage", "-Managing tasks"];

  const link = "https://sarojtodoapp.netlify.app";

  /*  const name1 = "hello world"
    const detail1 = "setting up my website"
    const image1 =" hello "
 */
  return (
    <div className="project_main">
      <div className="project_intro">
        <h1>Here are my Works </h1>
      </div>
      <div className="project_container">
        <div className="project">
          <Card name={name} detail={detail} image={img1} link={link} />
        </div>
        <div className="project">
          <Card name={name} detail={detail} image={img1} link={link} />
        </div>{" "}
        {/*    <div className="card">
            <Card name={name1} detail={detail1} image={image1}/>
            </div> */}
      </div>
    </div>
  );
}

export default Projects;
