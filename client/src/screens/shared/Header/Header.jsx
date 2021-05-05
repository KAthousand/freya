import React from 'react';
import "./Header.css"

function Header(props) {
  return (
    <div className='header-container'>
      <div className='header-content'>
        <a href='_blank' className='nav-link'>ORDER ONLINE</a>
        <a href='/menu' className='nav-link'>MENU</a>
        <a href='/info' className='nav-link'>LOCATION &amp; HOURS</a>
        <a href='_blank' className='nav-link'>PRIVATE EVENTS</a>
        <a href='_blank' className='nav-link'>RESERVATIONS</a>
      </div>
      <div className='nav-menu'>
        <div className='logo'>LOGO</div>
        <button>X</button>
      </div>
    </div>
  );
}

export default Header;