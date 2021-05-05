import React from 'react';
import './Home.css'

function Home(props) {
  return (
    <div className='home-container'>
      <div className='address-container'>
        <p>1234 Address St, Detroit, MI</p>
      </div>
      <div className='title-photo'></div>
      <div className='about-container'>
        <div className='about-text'></div>
      </div>
    </div>
  );
}

export default Home;