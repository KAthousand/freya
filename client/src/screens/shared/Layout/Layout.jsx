import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';


function Layout(props) {
  return (
    <div>
      <Header />
      <div className='layout-children'>
        {props.children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;