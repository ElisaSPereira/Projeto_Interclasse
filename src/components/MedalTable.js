import React from 'react';
import TabelaMedalhas from './TabelaMedalhas';
import './MedalTable.css';

const MedalTable = () => {
  return (
    <div>
      <h1 className="t2">ACOMPANHE A PONTUAÇÃO GERAL DE CADA PAÍS</h1>
      <TabelaMedalhas />
      <h1 className="t2">PÓDIO GERAL</h1>
    </div>
  );
};

export default MedalTable;