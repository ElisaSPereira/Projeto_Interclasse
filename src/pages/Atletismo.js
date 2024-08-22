import React from "react";
import { FiMenu } from "react-icons/fi";
import "../Atletismo.css";
import sesi from "../assets/sesi.png";

import banner from "../assets/Atletismo.png";
import TabelaAtletismo from "../components/AtletismoGroup";
import Header from "../components/Header";
import Podio from '../components/Podio';
import Footer from '../components/Footer';

function Atletismo() {
    return (
      <div>
      <Header/>
        <div>
          <img className="banner" src={banner}></img>
        </div>
        <div>
        <h1 className="t1">FEMININO E MASCULINO</h1>
        </div>
        <div>
          <h1 className="rodadaunica">RODADA ÚNICA</h1>
        </div>
        <TabelaAtletismo/>
        <div>
        <h1 className="t1">PÓDIO</h1>
        </div>
        <Podio/>
        <Footer />

        

  
      </div>
     
    );
  }
  
  export default Atletismo;