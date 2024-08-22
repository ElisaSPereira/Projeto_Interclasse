import React from 'react';
import './TabelaMedalhas.css'; // Importar o CSS

// Importar ícones das medalhas
import iconeOuro from '../assets/ouro.png';
import iconePrata from '../assets/prata.png';
import iconeBronze from '../assets/bronze.png';

const TabelaMedalhas = () => {
  // Dados da tabela
  const medalhas = [
    { pais: 'Brasil', ouro: 3, prata: 5, bronze: 2 },
    { pais: 'Bélgica', ouro: 10, prata: 8, bronze: 7 },
    { pais: 'Itália', ouro: 7, prata: 3, bronze: 4 },
    { pais: 'Canadá', ouro: 5, prata: 4, bronze: 6 },
    { pais: 'Inglaterra', ouro: 5, prata: 4, bronze: 6 },
    { pais: 'Alemanha', ouro: 5, prata: 4, bronze: 6 },
    { pais: 'Angola', ouro: 5, prata: 4, bronze: 6 },
    { pais: 'República Tcheca', ouro: 5, prata: 4, bronze: 6 },
  ];

  // Função para calcular o total de medalhas
  const calcularTotal = (ouro, prata, bronze) => ouro + prata + bronze;

  return (
    <table className="tabela-medalhas">
      <thead>
        <tr>
          <th>País</th>
          <th><img src={iconeOuro} alt="Ouro" className="icone-medalha" /></th>
          <th><img src={iconePrata} alt="Prata" className="icone-medalha" /></th>
          <th><img src={iconeBronze} alt="Bronze" className="icone-medalha" /></th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {medalhas.map((pais, index) => (
          <tr key={index}>
            <td>{pais.pais}</td>
            <td>{pais.ouro}</td>
            <td>{pais.prata}</td>
            <td>{pais.bronze}</td>
            <td>{calcularTotal(pais.ouro, pais.prata, pais.bronze)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TabelaMedalhas;
