import React from 'react';
import './Grupo2.css';

import Brasil from "../assets/brasil.png";
import Belgica from "../assets/bandeira-belgica.webp";
import Italia from "../assets/bandeira italia.jpg";
import Canada from "../assets/Canada.webp";
import Inglaterra from "../assets/bandeira-da-inglaterra.webp";
import Alemanha from "../assets/bandeira-da-alemanha.webp";
import Angola from "../assets/images.png";
import RC from "../assets/republica tcheca.webp";

const Grupo2 = () => {
  const flags = [
    [ Belgica, Italia],
    [Angola, Alemanha ],
    [Italia, Angola],
    [Alemanha, Belgica ],
    [Alemanha, Italia ],
    [Belgica, Angola],
  ];

  return (
    <table className="flag-table">
      <tbody>
        {flags.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((flagUrl, colIndex) => (
              <td key={colIndex}>
                <img src={flagUrl} alt={`Flag ${rowIndex}-${colIndex}`} className="flag" />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Grupo2;