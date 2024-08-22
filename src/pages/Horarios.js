import React from "react";
import "../Horarios.css";
import Tabelahorario from "../components/Tabelahorario";
import Header from "../components/Header";
import Footer from '../components/Footer';
import Banner from "../components/Banner";


function Horarios() {
  return (
    <div>
      <Header />


      <Banner />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1 className="t1">HORÁRIOS</h1>
      </div>

      <Tabelahorario />
      <Footer />


    </div>

  );


}

export default Horarios;