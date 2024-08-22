import React from 'react';
import './Grupi1.css';

import Brasil from "../assets/brasil.png";
import Belgica from "../assets/bandeira-belgica.webp";
import Italia from "../assets/bandeira italia.jpg";
import Canada from "../assets/Canada.webp";
import Inglaterra from "../assets/bandeira-da-inglaterra.webp";
import Alemanha from "../assets/bandeira-da-alemanha.webp";
import Angola from "../assets/images.png";
import RC from "../assets/republica tcheca.webp";

const Grupo1 = () => {
  const flags = [
    [ Canada, Brasil],
    [Inglaterra, RC ],
    [Brasil, Italia],
    [RC, Canada ],
    [RC, Brasil ],
    [Canada, Inglaterra ],
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

export default Grupo1;