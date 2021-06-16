import React from 'react'
import './contact.css'
function Form() {
    return (
        <div>
            <form netlify>
                <input className="name" type="text" placeholder="Enter your name"/> 
                <input type="text" placeholder="Phone number"/>
                <input type="text" placeholder="Enter your email address"/>
                <textarea placeholder="Your message"></textarea>
                <input className="submit" type="submit" value="Send"/>
            </form>
        </div>
    )
}

export default Form
