import React from 'react'
import {link} from 'react-router-dom'
import './Gallery.css'
function Gcard(props) {
   
/* for rendering detail list in page */
/* We take the input array from the incoming props, loop through the array using the JavaScript map function and return a <li> element for each item.
The resulted array is stored in the listItems variable.
Then, the component returns the listItems array inside a <ul> tag */
/* const arr = props.detail;
const listitems = arr.map((val) => 
<li>{val}</li>
); */
    return (
   
    <div className="gcard_main">
    <div className="gcard">
        <div className="gcard_image">
        <img src={props.image} alt="project image"></img>
        </div>
        
        <div className="gcard_body">
            <h2>{props.title}</h2>
            
            

        </div>

        
    </div>
    </div>
      

    )
    
}

export default Gcard
