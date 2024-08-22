import React from 'react';
import './Podio.css'; // Vamos usar um arquivo CSS para o estilo

const Podium = () => {
  return (
    <div className="podium-container">
    <div className="podium">
      <div className="box bronze">3º</div>
      <div className="box silver">2º</div>
      <div className="box gold">1º</div>
    </div>
  </div>
);
};

export default Podium;
