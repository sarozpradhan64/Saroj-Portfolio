import React, { useState } from "react";
import "./contact.css";
import emailjs from "emailjs-com";
import Success from "./Success";
import { useCookies } from "react-cookie";
function Form() {


  function sendEmail(e) {
   
    emailjs.sendForm("gmail", "template_94vaouj", e.target, "user_62jnS4jHOrdWu9kznFXvX")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
  return (
    <div className="form_container">
      <form className="contact-form" action="/success">
        <input type="hidden" name="contact_number" />
        <div hidden>
         
        </div>

        <input
          className="name"
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
        
          required
        />
        <input
          type="number"
          id="phone"
          name="phone"
          placeholder="Enter your Phone number"
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email address"
        />
        <textarea
          id="message"
          name="message"
          placeholder="Your message"
          required
        ></textarea>
        <button className="submit" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}

export default Form;
