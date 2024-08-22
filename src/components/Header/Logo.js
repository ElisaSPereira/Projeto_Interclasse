import React from 'react';
import sesi from '../../assets/sesi.png';

const Logo = () => {
  return (
    <nav className="home1">
      <a href="/home">
        <img src={sesi} alt="Logo" />
      </a>
    </nav>
  );
};

export default Logo;