import React from "react";
import { Lin, DataGrid } from "react-router-dom";
import "../Desenvolvedores.css";
import sesi from "../assets/sesi.png";
import { FiMenu } from "react-icons/fi";
import logo from "../assets/interclasse original.png";
import Equipe from "../assets/equipe.jpeg";
import Footer from '../components/Footer';

function Desenvolvedores() {
  return (
    <div>
      <div className="home">
        <nav className="home1">
          <a href="/home" > <img src={sesi}/> </a>
        </nav>

        <nav className="home2">
        <a href="/horarios" className="btn">HORÁRIOS </a>
          <a href="/modalidades" className="btn">MODALIDADES</a>
          <a href="/direcionamento" className="btn"><FiMenu size={20} radius={20} color="#ffffff" /></a>
        </nav>

      </div>

      <div className="banner2">
        <img style={{objectFit:"cover"}} src={Equipe} width="100%" height={427} />
        <img className="image-banner" src={logo} width={700} height={400} />
      </div>

      <div style={{display: "flex", justifyContent: "center"}}>
        <h1 className="t1">CONHEÇA OS DESENVOLVEDORES</h1>
      </div>

      <div className="caixa">
        <h2 className="h2">ANÁLISE E DESENVOLVIMENTO DE SISTEMAS</h2>
        <p className="texto">Ana Clara Batista Silvério <br/> Elisa Silva Pereira <br/>
        Nicolas Argenton Cristófaro</p>
      </div>

      <div className="caixa">
        <h2 className="h2">MULTIMÍDIA</h2>
        <p className="texto">Anna Clara Boarini <br/> Cibelle Aparecida Padilha Ulian<br/>
        Felipe Augusto Gomes dos Santos <br/> Yasmin Caetano Betioli</p>
      </div>
      <Footer />
      

      
    </div>


  );


}

export default Desenvolvedores;
