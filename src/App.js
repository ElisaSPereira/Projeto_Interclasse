import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Futsal from "./pages/Futsal"
import Volei from "./pages/Volei";
import Queimada from "./pages/Queimada";
import Basquete from "./pages/Basquete";
import Handebol from "./pages/Handebol";
import Futmesa from "./pages/Futmesa";
import Tenis from "./pages/Tenis";
import Atletismo from "./pages/Atletismo";
import Direcionamento from "./pages/Direcionamento";
import Desenvolvedores from "./pages/Desenvolvedores";
import Horarios from "./pages/Horarios";
import Modalidades from "./pages/Modalidades";



function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/modalidades" element={<Modalidades />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/direcionamento" element={<Direcionamento/>}/>
          <Route path="/desenvolvedores" element={<Desenvolvedores/>}/>
          <Route path="/futsal" element={<Futsal/>} />
          <Route path="/volei" element={<Volei/>} />
          <Route path="/queimada" element={<Queimada/>} />
          <Route path="/handebol" element={<Handebol/>} />
          <Route path="/basquete" element={<Basquete/>} />
          <Route path="/futmesa" element={<Futmesa/>} />
          <Route path="/tenis" element={<Tenis/>} />
          <Route path="/atletismo" element={<Atletismo/>} />
          <Route path="/horarios" element={<Horarios/>}/>
          
       
       
          
        </Routes>
      </div>
    </Router>
  );
  
}

export default App;
