import React from 'react';
import './Footer.css'

function Footer(props) {
  return (
    <div className='footer-container '>
        <div className= 'icon-container'>
          <i className='fab fa-facebook-square'></i>
          <i className='fab fa-instagram-square'></i>
          <i className='fab fa-tripadvisor'></i>
        </div>
    </div>
  );
}

export default Footer;