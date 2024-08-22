import React from 'react';
import { FiMenu } from 'react-icons/fi';
import './styles.css';


const Navigation = () => {
  return (
    <nav className="home2">
      <a href="/horarios" className="link">HORÁRIOS</a>
      <a href="/modalidades" className="link">MODALIDADES</a>
      <a href="/direcionamento" className="link">
        <FiMenu size={20} color="#ffffff" />
      </a>
      
    </nav>
    
  );
};

export default Navigation;