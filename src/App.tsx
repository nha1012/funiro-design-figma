import React from 'react';
import Feature from './components/Feature/Feature';
import Header from './components/Header/Header';
import Inspirations from './components/Inspirations/Inspirations';
import Navbar from './components/NavBar/Navbar';
import Products from './components/Products/Products';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Feature></Feature>
      <Products></Products>
      <Inspirations></Inspirations>
    </div>
  );
}

export default App;
