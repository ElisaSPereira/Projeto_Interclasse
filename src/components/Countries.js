import React from 'react';
import Tabela from './Tabela';
import './Countries.css';

const Countries = () => {
  return (
    <div style={{ display: "flex", justifyContent: 'center', flexDirection: "column", alignItems: 'center' }}>
      <h1 className="t1">CONHEÇA OS PAÍSES PARTICIPANTES</h1>
      <Tabela />
    </div>
  );
};

export default Countries;