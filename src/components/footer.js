import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./footer.css";
import App from "../App";
function Footer(props) {

  const [darkmode, setDarkmode] = useState(false)

  const [modal, setModal] = useState(false)


  return (
    <div className="footer">
      <div className="footer_menu">
        <ul className="social_media">
          <li className="footer_links">
            <a
              href="https://www.instagram.com/srz.prdhnn/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-instagram"></i>
            </a>
          </li>
          <li className="footer_links">
            <a
              href="https://www.linkedin.com/in/saroj-pradhan-4628831a1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-linkedin"></i>
            </a>
          </li>
          <li className="footer_links">
            <a
              href="https://github.com/sarozpradhan64"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-github-square"></i>
            </a>
          </li>
          <p className="heart">Made with🖤Saroj</p>
        </ul>
        
      </div>
     
    
    </div>
  );
}

export default Footer;
