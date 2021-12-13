import React from 'react'
import {link} from 'react-router-dom'
import './Projects.css'
function Card(props) {
   
/* for rendering detail list in page */
/* We take the input array from the incoming props, loop through the array using the JavaScript map function and return a <li> element for each item.
The resulted array is stored in the listItems variable.
Then, the component returns the listItems array inside a <ul> tag */
const arr = props.detail;
const listitems = arr.map((val) => 
<li>{val}</li>
);
    return (
   
    <div>
    <div className="card">
        <div className="card_image">
        <img src={props.image} alt="project image"></img>
        </div>
        
        <div className="card_body">
            <h3>{props.name}</h3>
            <ul>{listitems}</ul>
            <div className="link">
            <a href={props.link}><i class="fas fa-link"></i></a>
            </div>
        </div>

        
    </div>
    </div>
      

    )
    
}

export default Card
