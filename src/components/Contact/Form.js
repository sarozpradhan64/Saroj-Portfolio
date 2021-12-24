import React, { useRef } from "react";
import "./contact.css";
import emailjs from "emailjs-com";
import Success from "./Success";
import { useCookies } from "react-cookie";
function Form() {

  const form = useRef();

  function sendEmail(e) {
   e.preventDefault();
    emailjs.sendForm("gmail", "template_94vaouj", form.current, "user_62jnS4jHOrdWu9kznFXvX")
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
      <form ref={form} onSubmit={sendEmail} className="contact-form" action="/success">
        <h2 className="form_title">Send me a Message</h2>
        <input type="hidden" name="contact_number" />
        <div hidden>
         
        </div>

        <input
          className="input"
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
        
          required
        />
        <input  className="input"
          type="number"
          id="phone"
          name="phone"
          placeholder="Enter your Phone number"
        />
        <input  className="input"
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
