import React from 'react'
import Gcard from './Gcard'
import pic1 from './1.jpg'
import './Gallery.css'
function Gallery() {

    return (
        <>
        <div className="gallery_intro">
            <h1>Collection that reflects me </h1>

        </div>
        <div className="gallery_container"  >
            
            <div className="gallery">
            <Gcard image={pic1} title="poonhill"/>
            </div>
          <div className="gallery">
            <Gcard image={pic1} title="poonhill"/>
           </div>     
        </div>
        </>
       
    )
}

export default Gallery
