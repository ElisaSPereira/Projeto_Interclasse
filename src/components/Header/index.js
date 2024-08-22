import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import './styles.css';

const Header = () => {
  return (
    <header className="home">
      <Logo />
      <Navigation />
    </header>
  );
};

export default Header;
