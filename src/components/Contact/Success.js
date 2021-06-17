import React from "react";
import { NavLink } from "react-router-dom";
import "./contact.css";
import Form from "./Form";
function Success() {
  return (
    <div className="form_container">
      <form>
        <p style={{fontSize:'20px'}}>Your message is sent successfully</p>
        <NavLink exact to="/contact" className="back">
            
          Back
        </NavLink>
        <NavLink style={{marginTop:'10px'}}exact to="" className="back">
            
           Home 
        </NavLink>
      </form>
    </div>
  );
}

export default Success;
