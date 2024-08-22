import React from 'react';
import './Tabelahorario.css'; 

const dates = [
    '11/08', '13/08', '15/08', '18/08', '20/08', '25/08', '28/08',
    '01/09', '05/09', '17/09', '20/09', '23/09', '27/09', '08/10',
    '12/10', '16/10', '19/10', '24/10', '28/10', '01/11', '05/11',
    '10/11', '15/11', '20/11'
  ];
  
  const times = [
    '10:00', '09:00', '11:00', '09:00', '15:00', '07:30', '09:30',
    '08:30', '11:00', '10:00', '13:00', '07:00', '11:00', '10:00',
    '09:00', '08:15', '11:00', '09:00', '07:30', '10:00', '10:00',
    '11:00', '11:00', '09:30'
  ];
  
  const modalities = [
    'Tênis de mesa', 'Vôlei', 'Basquete', 'Handebol', 'Atletismo', 'Futmesa',
    'Vôlei', 'Basquete', 'Handebol', 'Futmesa', 'Vôlei', 'Basquete',
    'Handebol', 'Queimada', 'Vôlei', 'Queimada', 'Handebol', 'Queimada',
    'Vôlei', 'Futmesa', 'Vôlei', 'Basquete', 'Tênis de mesa', 'Encerramento'
  ];
  
  const classes = [
    '9ºA x 9ºB', '1ºA x 1ºB', '2ºA x 2ºB', '3ºA x 9ºA', '9º ao 3º', '9ºB x 1ºB',
    '3ºB x 9ºA', '2ºA x 1ºB', '9ºB x 2ºB', '1ºA x 3ºB', '2ºA x 9ºA',
    '1ºB x 3ºA', '9ºB x 2ºA', '3ºA x 1ºA', '9ºA x 2ºB', '3ºB x 1ºB',
    '9ºA x 2ºA', '3ºA x 1ºB', '2ºB x 9ºB', '1ºB x 3ºB', '9ºA x 2ºA',
    '3ºA x 1ºB', '9ºA x 1ºA', 'Encerramento'
  ];
  
  // Componente da tabela
  const TableComponent = () => {
    return (
      <table className="table-container">
        <thead>
          <tr>
            <th>Data</th>
            <th>Horários</th>
            <th>Modalidade</th>
            <th>Turmas</th>
          </tr>
        </thead>
        <tbody>
          {dates.map((date, index) => (
            <tr key={index}>
              <td>{date}</td>
              <td>{times[index]}</td>
              <td>{modalities[index]}</td>
              <td>{classes[index]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  

export default TableComponent;
