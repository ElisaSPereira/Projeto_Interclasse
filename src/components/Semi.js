import React from 'react';
import './Semi.css';

const Semi = () => {
  const tableData = [
    ['?', '?'],
    ['?', '?'],
  ];

  return (
    <table className="question-mark-table">
      <tbody>
        {tableData.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, colIndex) => (
              <td key={colIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Semi;