import React from 'react';
import Feature from './components/Feature/Feature';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Inspirations from './components/Inspirations/Inspirations';
import Navbar from './components/NavBar/Navbar';
import Products from './components/Products/Products';
import Share from './components/Share/Share';
import TipAndTrick from './components/TipAndTrick/TipAndTrick';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Feature></Feature>
      <Products></Products>
      <Inspirations></Inspirations>
      <TipAndTrick></TipAndTrick>
      <Share></Share>
      <Footer></Footer>
    </div>
  );
}

export default App;
