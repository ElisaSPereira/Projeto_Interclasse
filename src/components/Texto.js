// src/components/HorizontalText.js
import React from 'react';
import './Texto.css';

const HorizontalText = () => {
  return (
    <div className="vertical-text-lines-container">
    <div className="text-column">
      <p className='grupo1'>Grupo 1 </p>
      <p>9ºA (Brasil)</p>
      <p>1ºB (Canadá)</p>
      <p>2ºA (Inglaterra)</p>
      <p>3ºB (República Tcheca)</p>
    </div>
    <div className="separator"></div>
    <div className="text-column">
      <p className='grupo2'>Grupo 2</p>
      <p>2ºB (Alemanha)</p>
      <p>3ºA (Angola)</p>
      <p>1ºA (Itália)</p>
      <p>9ºB (Bélgica)</p>
    </div>
  </div>
  );
};

export default HorizontalText;
