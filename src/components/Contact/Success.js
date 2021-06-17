import React from 'react'
import {NavLink} from 'react-router-dom' 
import './contact.css'
import Form from './Form'
function Success() {
  
    return (
        
        <div className="form_container">
            
        <form>
       
       <p>Your message is sent successfully</p>
       <NavLink exact to="./contact" className="back">Back</NavLink>
        </form>
        </div>
    )
}

export default Success
