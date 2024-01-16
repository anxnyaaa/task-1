import React, {useState} from 'react';
import About from './About';
import Review from './Review';
import Contact from './Contact';
import "./Navbar.css";

import './adelia.ttf';

function Navbar(props) {
  const [currentPage, setCurrentPage] = useState('');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => (
    currentPage === 'home' ? <Home /> :
    currentPage === 'about' ? <About /> :
    currentPage === 'review' ? <Review /> :
    currentPage === 'contact' ? <Contact /> :
    null
  );

  return (
    <div className="topnav">
      <nav>
      <h1>Ananya Pal</h1>  
        <ul>
          <li><a href="#home" onClick={() => handlePageChange('home')}>{props.home}</a></li>
          <li><a href="#about" onClick={() => handlePageChange('about')}>{props.about}</a></li>
          <li><a href="#review" onClick={() => handlePageChange('review')}>{props.review}</a></li>
          <li><a href="#contact" onClick={() => handlePageChange('contact')}>{props.contact}</a></li>     
        </ul>
      </nav>

      {renderPage()}
    </div>
  );
}

export default Navbar;