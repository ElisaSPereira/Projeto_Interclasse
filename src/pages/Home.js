import React from "react";
import "./Home.css";
import Header from '../components/Header';
import Banner from '../components/Banner';
import WelcomeBox from '../components/WelcomeBox';
import Countries from '../components/Countries';
import MedalTable from '../components/MedalTable';
import Footer from '../components/Footer';
import Podio from '../components/Podio';
const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <WelcomeBox />
      <Countries />
      <MedalTable />
      <Podio/>
      <Footer />
     
    </div>
  );
};

export default Home;
