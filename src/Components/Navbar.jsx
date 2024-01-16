import React from 'react'
import "./Navbar.css";

import './adelia.ttf';

function Navbar(props) {
  return (
    <div className="topnav">
      <nav>
      <h1>Ananya Pal</h1>  
        <ul>
          <li><a class="active" href="#home">{props.home}</a></li>
          <li><a href="#about">{props.about}</a></li>
          <li><a href="#review">{props.review}</a></li>
          <li><a href="#contact">{props.contact}</a></li>          
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;