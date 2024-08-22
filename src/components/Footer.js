import React from 'react';
import SesiBranco from '../assets/sesi_branco.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <img src={SesiBranco} alt="Sesi Branco" width={90} height={36} />
    </footer>
  );
};

export default Footer;