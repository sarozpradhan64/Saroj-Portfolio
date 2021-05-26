import React, { useState } from 'react'
import './footer.css'

function Footer() {
    const[ darkmode, setDarkmode] = useState(false)

    const handledarkmode =() => {
        setDarkmode(!darkmode);
    }
    return (
           
        <div className="footer">
          <ul className="footer_menu">
              <li className="footer_links">
                  <a href="https://www.instagram.com/srz.prdhnn/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                  </li>
              <li className="footer_links"> 
              <a href="https://www.linkedin.com/in/saroj-pradhan-4628831a1/" target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-linkedin"></i>
                  </a></li>
              <li className="footer_links">
                  <a href="https://github.com/sarozpradhan64" target="_blank" rel="noopener noreferrer"> 
                      <i class="fab fa-github-square"></i></a></li>    
          </ul>
            
        </div>
        
    )
}

export default Footer
