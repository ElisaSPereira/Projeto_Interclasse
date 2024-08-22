import React from "react";
import { FiMenu } from "react-icons/fi";
import "../Volei.css";
import sesi from "../assets/sesi.png";

import banner from "../assets/volei_banner.png"
import Grupo1 from "../components/Grupo1";
import Grupo2 from "../components/Grupo2";
import Semi from "../components/Semi";
import Final from "../components/Final";
import Header from "../components/Header";
import HorizontalText from "../components/Texto";
import Podio from '../components/Podio';
import Footer from '../components/Footer';

function Volei() {
    return (
      <div>
         <div>
          <Header/>
  
        </div>
        <div>
          <img className="banner" src={banner}></img>
        </div>
        <div>
        <h1 className="t1">FEMININO E MASCULINO</h1>
        </div>
        <div>
      <HorizontalText />
    </div>


        <div>
        <h1 className="grupos">RODADAS GRUPO 1</h1>
        </div>
        <Grupo1/>
        <div>
        <h1 className="grupos">RODADAS GRUPO 2</h1>
        </div>
        <Grupo2/>
        <div className="grupos">
          <h1>SEMIFINAL FEMININO</h1>
        </div>
        <Semi/>
        <div className="grupos">
          <h1>SEMIFINAL MASCULINO</h1>
        </div>
        <Semi/>
        <div className="grupos">
          <h1>FINAL FEMININO</h1>
        </div>
        <Final/>
        <div className="grupos">
          <h1>FINAL MASCULINO</h1>
        </div>
        <Final/>
        <div>
        <h1 className="t1">PÓDIO</h1>
        </div>
        <Podio/>
        <Footer />


  
      </div>
     
    );
  }
  
  export default Volei;