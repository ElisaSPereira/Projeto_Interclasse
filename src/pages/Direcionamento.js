import React from "react";
import "../Direcionamento.css";
import sesi from "../assets/sesi.png";
import { FiMenu } from "react-icons/fi";
import Logo from "../assets/interclasse original.png";
import Seta from "../assets/cor mudada.png";
import Footer from '../components/Footer';
function Direcionamento() {
  return (
    <div className="container1">
        <div>
            <div className="home">
                <nav className="home1">
                    <a href="/home" > <img src={sesi}/> </a>
                </nav>

                <nav className="home2">
                    <a href="/Direcionamento" className="btn"><FiMenu size={20} radius={20} color="#ffffff" /></a>
                </nav>
            </div>
            <div className="centro">
           
                <div className="lista">
                <h1 className="h1">IR PARA </h1>
                <a href="/home" className="btnD">PONTUAÇÃO <img className="seta" src={Seta}/></a>
                <a href="/desenvolvedores" className="btnD">DESENVOLVEDORES <img className="seta" src={Seta}/></a>
                <a href="/modalidades"className="btnD">MODALIDADES <img className="seta" src={Seta}/></a>
                <a href="/horarios" className="btnD">HORÁRIOS <img className="seta" src={Seta}/></a>
                
                </div>
                <img className="logo1" src={Logo} ></img>
            
            </div>
            
        
        </div>
        
       
        
     

    </div>
   
  );
}

export default Direcionamento;