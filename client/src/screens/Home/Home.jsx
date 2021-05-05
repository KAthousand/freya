import { useEffect, useState } from 'react';
import './Home.css'

function Home(props) {
  const [logo, setLogo] = useState(false)

  useEffect(() => {
    setLogo(true);
  }, [])

  return (
    <div className='home-container'>
      <div className='address-container'>
        <p>1234 ADDRESS ST, DETROIT, MI</p>
      </div>
      <div className={logo ? 'title-logo' : 'title-logo  title-logo-transition'}>
        <div className={logo ? 'feather' : 'feather feather-transition'}></div>
      </div>
      <div className='title-photo'></div>
      <div className='about-container'>
        <div className='about-text'></div>
      </div>
    </div>
  );
}

export default Home;