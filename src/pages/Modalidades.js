import React from "react";
import "../Example.css";
import sesi from "../assets/sesi.png";
import { FiMenu } from "react-icons/fi";

import Ifutsal from "../assets/futsal_banner.png";
import IVolei from "../assets/volei_banner.png";
import IQueimada from "../assets/Queimada.png";
import IHandebol from "../assets/Handebol.png";
import IBasquete from "../assets/Basquete.png";
import IFutmesa from "../assets/Futmesa.png";
import ITênis from "../assets/Tenis.png"
import IAtletismo from "../assets/Atletismo.png"
import Logo from "../assets/interclasse original.png"
import Header from "../components/Header";
import Footer from '../components/Footer';

function Modalidades() {
  return (
    <div className="container1E">
      <Header />

      <div style={{display: "flex", justifyContent: "center"}} >
        <img className="logo-teste" src={Logo} ></img>
      </div>



      <div className="containerE">

        <a href="/futsal" > <img className="image" src={Ifutsal} width={352} height={182} /></a>
        <a href="/volei" > <img className="image" src={IVolei} width={352} height={182} /></a>
        <a href="/queimada" > <img className="image" src={IQueimada} width={352} height={182} /></a>
        <a href="/handebol" > <img className="image" src={IHandebol} width={352} height={182} /></a>
        <a href="/basquete" > <img className="image" src={IBasquete} width={352} height={182} /></a>
        <a href="/futmesa" > <img className="image" src={IFutmesa} width={352} height={182} /></a>
        <a href="/tenis" > <img className="image" src={ITênis} width={352} height={182} /></a>
        <a href="/atletismo" > <img className="image" src={IAtletismo} width={352} height={182} /></a>

      </div>

      <Footer />


    </div>

  );
}

export default Modalidades;
