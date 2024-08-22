import React from 'react';
import Brasil from "../assets/brasil.png";
import Belgica from "../assets/bandeira-belgica.webp";
import Italia from "../assets/bandeira italia.jpg";
import Canada from "../assets/Canada.webp";
import Inglaterra from "../assets/bandeira-da-inglaterra.webp";
import Alemanha from "../assets/bandeira-da-alemanha.webp";
import Angola from "../assets/images.png";
import RC from "../assets/republica tcheca.webp";
import "./Tabela.css";

const Tabela = () => {
  // Dados da tabela
  const salas = [
    { sala: '9º A', pais: '', bandeira: Brasil },
    { sala: '9º B', pais: '', bandeira: Belgica },
    { sala: '1º A', pais: '', bandeira: Italia },
    { sala: '1º B', pais: '', bandeira: Canada },
    { sala: '2º A', pais: '', bandeira: Inglaterra },
    { sala: '2º B', pais: '', bandeira: Alemanha},
    { sala: '3º A', pais: '', bandeira: Angola },
    { sala: '3º B', pais: '', bandeira: RC },
  ];

 

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Sala</th>
          <th>País Representado</th>
        </tr>
      </thead>
      <tbody>
        {salas.map((sala, index) => (
          <tr key={index}>
            <td>{sala.sala}</td>
            <td>
              <img src={sala.bandeira} alt={sala.pais} width="50" height="30" />
              {` ${sala.pais}`}
            </td>
          </tr>
        ))}
      </tbody>
     

    </table>
    
    
  );
};





export default Tabela;

