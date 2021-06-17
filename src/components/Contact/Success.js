import React from 'react'
import './contact.css'
import Form from './Form'
function Success() {
    return (
        <div className="form_container">
            <p>Your message is sent successfully</p>
        <form method="POST"
        action="/contact"name="contact"
        action="/success"
        data-netlify="true" 
        onSubmit = "submit"
        data-netlify-honeypot ="bot-field">
            <input type="hidden" name="form-name" value="contact"/>
            <div hidden>
                <input name="bot-field"/>
            </div>
            <input className="name" type="text" id="name" name="name" placeholder="Enter your name" required/> 
            <input type="number" id="phone" name="phone" placeholder="Enter your Phone number" />
            <input type="email" id="email" name ="email" placeholder="Enter your email address"/>
            <textarea id="message" name="message" placeholder="Your message" required></textarea>
            <button className="submit" type="submit" >Send</button>
        
        </form>
        </div>
    )
}

export default Success
