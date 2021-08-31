import React from 'react';
import Feature from './components/Feature/Feature';
import Header from './components/Header/Header';
import Navbar from './components/NavBar/Navbar';
import Products from './components/Products/Products';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Feature></Feature>
      <Products></Products>
    </div>
  );
}

export default App;
