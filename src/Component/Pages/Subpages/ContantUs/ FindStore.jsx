import React from 'react';
import Maps from './Map/Map';
import { Link } from 'react-router-dom'

const FindStore = () => {
  return (
    <section className='section__subpages find__store'>
      <div className="title__block">
        <h2 className='title__h2'>Find a Store</h2>
        <Link
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          to="/"
          className='btn'>
          Back
        </Link>
      </div>
      <Maps />
    </section>
  );
};

export default FindStore;