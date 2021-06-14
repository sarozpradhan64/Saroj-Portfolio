import React from 'react'
import home from "./home.svg"
import './Home.css'
import home2 from './Home2.svg'
import resume from './resume.pdf'
function Home() {
    return (
        <>
        <div className="main">
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
        <img src={home} ></img>
        </div>
        </div>

        <div className="about">

            <div className="about_image">
        
        <img src={home2}></img>
        </div>

        <div className="about_detail">
        <h1>About me</h1>
            <p>
                 Hi, i am saroj pradhan. Currently pursuing my bachelor's degree in Bsc. CSIT. And
                I love to geek out on computer and techs things.     
            </p>
            <button type="button" className="resume">
            <a href={resume} target="_blank">Resume</a>
            </button>
        </div>

        </div>
        </>
        
    )
}

export default Home
