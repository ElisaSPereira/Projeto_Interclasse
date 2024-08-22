import React from 'react';
import './AtletismoGroup.css';

import Brasil from "../assets/brasil.png";
import Belgica from "../assets/bandeira-belgica.webp";
import Italia from "../assets/bandeira italia.jpg";
import Canada from "../assets/Canada.webp";
import Inglaterra from "../assets/bandeira-da-inglaterra.webp";
import Alemanha from "../assets/bandeira-da-alemanha.webp";
import Angola from "../assets/images.png";
import RC from "../assets/republica tcheca.webp";

const flagUrls = [
    Brasil, 
    Belgica,
    Italia,
    Canada,
    Inglaterra,
    Alemanha,
    Angola,
    RC,
];

const FlagTable = () => {
    return (
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <tbody>
          <tr>
            {flagUrls.map((url, index) => (
              <td key={index} style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>
                <img src={url} alt={`Flag ${index + 1}`} style={{ width: '50px', height: 'auto' }} />
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    );
  };
  
  export default FlagTable;