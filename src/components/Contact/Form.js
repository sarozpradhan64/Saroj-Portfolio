import React, { useState } from "react";
import "./contact.css";
import Success from "./Success";
function Form() {
  return (
    <div className="form_container">
      <form
        name="Contact me"
        action=""
        data-netlify="true"
        onSubmit="submit"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div hidden>
          <input name="bot-field" />
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
        <input style={{padding:10}} type="file" id="file" name="file" />
        <button className="submit" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}

export default Form;
