import React from 'react';
import banner from '../assets/sesi_vermelho.png';
import logo from '../assets/interclasse original.png';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner2">
      <img className='image-banner' src={banner} alt="Banner" width={1027} height={427} />
      <img className='logo-image' src={logo} alt="Logo" width={700} height={400} />
    </div>
  );
};

export default Banner;