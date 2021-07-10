import React, {useState} from 'react'
import { NavLink } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
   const [click, setClick] = useState(false);

   const handleClick=()=> setClick(!click);
   
   const [navcolor, setNavcolor] = useState(false);
   
   const Navcolor = () => {
     if(window.scrollY >= 20){
       setNavcolor(true);
     }
     else{
       setNavcolor(false);
     }
   };
   window.addEventListener('scroll', Navcolor);
  return (
    
    <nav className={ navcolor ? 'change' : 'navbar'}>
    <div className="nav-container">
      <div className="nav-logo">
    <NavLink exact to="/" className="logo">
      Saroj
      <i className="fas fa-code"></i>
    </NavLink>
    </div>

    <ul className={click ? "nav-menu active" : "nav-menu"} >  {/* when clicking menu it setClick=true which invokes nav-menu true */}
      <li className="nav-item">
        <NavLink exact to="/" activeClassName="active" 
        className="nav-links" onClick={handleClick}>
          Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink exact to="/projects" activeClassName="active" 
        className="nav-links" onClick={handleClick}>
          Projects</NavLink>
      </li>
      <li className="nav-item">
        <NavLink exact to="/blog" activeClassName="active" 
        className="nav-links" onClick={handleClick}>
          Blogs</NavLink>
      </li>
      <li className="nav-item">
        <NavLink exact to="/gallery" activeClassName="active" 
        className="nav-links" onClick={handleClick}>
          Gallery</NavLink>
      </li>
    </ul>

 
 {/* Hamurger menu toggle when false= bars */}
    <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
    </div>
    </nav>

  )
}

export default Navbar
