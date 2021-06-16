import React from 'react'
import './contact.css'
function Form() {
    return (
       
            <form name="contact" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact"/>
                <input className="name" type="text" id="name" name="name" placeholder="Enter your name"/> 
                <input type="text" id="phone" name="phone" placeholder="Phone number"/>
                <input type="email" id="email" name ="email" placeholder="Enter your email address"/>
                <textarea id="message" name="message" placeholder="Your message"></textarea>
                <input className="submit" type="submit" value="Send"/>
            </form>,
            document.getElementById('root')
       
    )
}

export default Form
